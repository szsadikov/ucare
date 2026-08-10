/**
 * Decorative QR code for the employee screen.
 *
 * This is not a real QR code: the modules are filled by a linear congruential
 * generator with a fixed seed, so the image is identical on every run. Keep the
 * seed and the coefficients as they are — changing them changes the artwork.
 */
const MODULES = 29
const PIXEL = 6
const SEED = 20260808

export function makeQr(): string {
  const n = MODULES
  const px = PIXEL
  const c = document.createElement('canvas')
  c.width = c.height = n * px
  const x = c.getContext('2d')
  if (!x) return ''

  x.fillStyle = '#fff'
  x.fillRect(0, 0, c.width, c.height)

  let s = SEED
  const rnd = () => {
    s = (s * 1103515245 + 12345) % 2147483648
    return s / 2147483648
  }

  x.fillStyle = '#14243A'

  const finder = (r: number, cl: number) => {
    for (let i = 0; i < 7; i++)
      for (let j = 0; j < 7; j++) {
        const edge = i === 0 || i === 6 || j === 0 || j === 6
        const core = i > 1 && i < 5 && j > 1 && j < 5
        if (edge || core) x.fillRect((cl + j) * px, (r + i) * px, px, px)
      }
  }

  const inFinder = (r: number, cl: number) =>
    (r < 8 && cl < 8) || (r < 8 && cl > n - 9) || (r > n - 9 && cl < 8)

  for (let r = 0; r < n; r++)
    for (let cl = 0; cl < n; cl++) {
      if (inFinder(r, cl)) continue
      if (rnd() > 0.52) x.fillRect(cl * px, r * px, px, px)
    }

  finder(0, 0)
  finder(0, n - 7)
  finder(n - 7, 0)

  return c.toDataURL()
}
