/* Logos fictícios do marquee (logo cloud). Ícones SVG inline. */
export const LOGOS = [
  { name: 'Northwind', icon: '<path d="M14 3l9 5v12l-9 5-9-5V8l9-5zm0 3.2L8 9.5v9l6 3.3 6-3.3v-9l-6-2.3z" fill-rule="evenodd"/>' },
  { name: 'Lumina', icon: '<circle cx="14" cy="14" r="5"/><path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.6 5.6l2.8 2.8M19.6 19.6l2.8 2.8M22.4 5.6l-2.8 2.8M8.4 19.6l-2.8 2.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>' },
  { name: 'Vertex', icon: '<path d="M14 4l10 20H4L14 4z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>' },
  { name: 'Quanta', icon: '<circle cx="14" cy="14" r="10" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="14" cy="14" r="4"/>' },
  { name: 'Helios', icon: '<circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="14" cy="14" r="3.2"/>' },
  { name: 'Monogram', icon: '<rect x="4" y="4" width="14" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="10" y="10" width="14" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/>' },
  { name: 'Cobalt', icon: '<path d="M14 3l10 11-10 11L4 14 14 3z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>' },
  { name: 'Apex', icon: '<path d="M14 5l9 17H5L14 5z"/>' },
  { name: 'Stratus', icon: '<rect x="4" y="7" width="20" height="3" rx="1.5"/><rect x="4" y="13" width="20" height="3" rx="1.5" opacity="0.7"/><rect x="4" y="19" width="13" height="3" rx="1.5" opacity="0.45"/>' },
  { name: 'Kindred', icon: '<circle cx="10" cy="14" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="18" cy="14" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/>' },
  { name: 'Orbit', icon: '<ellipse cx="14" cy="14" rx="12" ry="6" fill="none" stroke="currentColor" stroke-width="2.2" transform="rotate(-30 14 14)"/><circle cx="22" cy="9" r="2.6"/>' },
  { name: 'Nimbus', icon: '<rect x="4" y="4" width="20" height="20" rx="6" fill="none" stroke="currentColor" stroke-width="2.2"/>' }
]

export function logoSvg(logo) {
  const iconBox = 28
  const textX = iconBox + 8
  const textWidth = Math.round(logo.name.length * 9.2) + 6
  const width = textX + textWidth
  return (
    '<svg viewBox="0 0 ' + width + ' 28" height="28" role="img" aria-label="' + logo.name + '" xmlns="http://www.w3.org/2000/svg">' +
    '<g fill="currentColor">' + logo.icon + '</g>' +
    '<text x="' + textX + '" y="20" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="600" letter-spacing="-0.3" fill="currentColor">' + logo.name + '</text>' +
    '</svg>'
  )
}