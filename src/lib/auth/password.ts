/** Password rules for admin accounts (Supabase stores them bcrypt-hashed). Returns a problem, or null if OK. */
export function passwordProblem(password: string, confirm?: string): string | null {
  if (password.length < 10) return 'Use at least 10 characters.'
  if (!/[a-z]/i.test(password) || !/\d/.test(password)) return 'Use a mix of letters and numbers.'
  if (/^(.)\1+$/.test(password) || /password|123456|qwerty|taggroup/i.test(password)) return 'That password is too easy to guess.'
  if (confirm !== undefined && password !== confirm) return 'The two passwords do not match.'
  return null
}
