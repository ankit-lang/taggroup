/**
 * Life @ TAG photo gallery (Careers page → "Life at TAG").
 *
 * Folders appear as tabs; each folder holds event albums, newest first.
 * To add photos: put them in /public/assets/<something>/ and add an album
 * (or a new folder) below.
 */
export type GalleryAlbum = {
  id: string
  title: string
  date: string // shown under the title, e.g. "November 2026"
  photos: { src: string; alt: string }[]
}

export type GalleryFolder = {
  id: string
  name: string
  albums: GalleryAlbum[]
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1)

export const LIFE_GALLERY: GalleryFolder[] = [
  {
    id: 'sector-15-office',
    name: 'Sector 15 Office',
    albums: [
      {
        id: 'deepawali-2026',
        title: 'Deepawali 2026',
        date: 'November 2026',
        photos: range(9).map(i => ({
          src: `/assets/diwali/d${i}.jpg`,
          alt: `Deepawali 2026 celebrations at TAG's Sector 15 office, Gurgaon — photo ${i}`,
        })),
      },
    ],
  },
]
