/* Descoberta automática das imagens de cada projeto.
 *
 * As imagens de um projeto ficam em `src/assets/projects/<slug>/`.
 * Para adicionar uma nova imagem ao carrossel, basta soltar o arquivo na
 * pasta do projeto — ele aparece sozinho, sem editar este arquivo nem o
 * projects.js. Use nomes que ordenem naturalmente (01.png, 02.png, ...) para
 * garantir a sequência esperada do carrossel.
 */

const modules = import.meta.glob(
  '/src/assets/projects/**/*.{png,jpg,jpeg,webp,svg,avif}',
  { eager: true, import: 'default' }
)

// Comparação "natural" para que 02.png venha antes de 10.png.
function natCompare(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
}

const galleries = {}

for (const path in modules) {
  const match = path.match(/^\/src\/assets\/projects\/([^/]+)\/(.+)$/)
  if (!match) continue
  const slug = match[1]
  const file = match[2]
  if (!galleries[slug]) galleries[slug] = []
  galleries[slug].push({ file, url: modules[path] })
}

for (const slug in galleries) {
  galleries[slug].sort((a, b) => natCompare(a.file, b.file))
}

const galleriesUrl = {}
for (const slug in galleries) {
  galleriesUrl[slug] = galleries[slug].map((i) => i.url)
}

export function galleryFor(slug) {
  return galleriesUrl[slug] || []
}

export function coverFor(slug) {
  return galleriesUrl[slug]?.[0] || null
}