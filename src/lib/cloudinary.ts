import crypto from 'crypto'

/**
 * Server-only Cloudinary helpers. Needs CLOUDINARY_API_KEY and
 * CLOUDINARY_API_SECRET (never expose these to the browser).
 */

type Parsed = { resourceType: 'image' | 'raw' | 'video'; publicId: string }

/**
 * Turns a delivery URL into its resource type + public_id, e.g.
 *   https://res.cloudinary.com/<cloud>/raw/upload/v123/folder/file.pdf   -> raw,   "folder/file.pdf"
 *   https://res.cloudinary.com/<cloud>/image/upload/c_fill,w_800/v123/x.jpg -> image, "x"
 * Returns null for URLs that aren't plain uploads in *our* cloud.
 */
export function parseCloudinaryUrl(url: string | null | undefined): Parsed | null {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  if (!url || !cloud) return null
  let u: URL
  try {
    u = new URL(url)
  } catch {
    return null
  }
  if (u.hostname !== 'res.cloudinary.com') return null
  const parts = u.pathname.split('/').filter(Boolean).map(decodeURIComponent)
  // [cloud, resourceType, 'upload', ...transformations?, 'v123'?, ...publicIdParts]
  if (parts[0] !== cloud || parts[2] !== 'upload') return null
  const resourceType = parts[1]
  if (resourceType !== 'image' && resourceType !== 'raw' && resourceType !== 'video') return null
  let rest = parts.slice(3)
  const v = rest.findIndex(p => /^v\d+$/.test(p))
  if (v !== -1) rest = rest.slice(v + 1)
  else while (rest.length > 1 && /[,_]/.test(rest[0]) && /^[a-z]{1,3}_/.test(rest[0])) rest = rest.slice(1) // drop transformations
  if (!rest.length) return null
  let publicId = rest.join('/')
  // For images/videos the extension is the delivery format, not part of the id; raw files keep it.
  if (resourceType !== 'raw') publicId = publicId.replace(/\.[a-z0-9]+$/i, '')
  return { resourceType, publicId }
}

/** Permanently deletes an uploaded file by its delivery URL. Never throws. */
export async function deleteCloudinaryFile(url: string | null | undefined): Promise<{ ok: boolean; skipped?: boolean; error?: string }> {
  const parsed = parseCloudinaryUrl(url)
  if (!parsed) return { ok: true, skipped: true } // not one of our Cloudinary uploads
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const key = process.env.CLOUDINARY_API_KEY
  const secret = process.env.CLOUDINARY_API_SECRET
  if (!key || !secret) return { ok: false, error: 'CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET not set' }

  const timestamp = Math.floor(Date.now() / 1000)
  // Signature = sha1 of the alphabetically sorted params + secret
  const toSign = `invalidate=true&public_id=${parsed.publicId}&timestamp=${timestamp}${secret}`
  const signature = crypto.createHash('sha1').update(toSign).digest('hex')

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/${parsed.resourceType}/destroy`, {
      method: 'POST',
      body: new URLSearchParams({
        public_id: parsed.publicId,
        invalidate: 'true',
        timestamp: String(timestamp),
        api_key: key,
        signature,
      }),
    })
    const data = await res.json().catch(() => ({}))
    // "not found" means it's already gone — treat as success.
    if (data.result === 'ok' || data.result === 'not found') return { ok: true }
    return { ok: false, error: data.error?.message || data.result || `HTTP ${res.status}` }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}
