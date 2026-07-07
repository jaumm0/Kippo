import { useReveal } from '../hooks/useReveal'

/**
 * Wrapper que aplica a animação `.reveal` (fade + translate up) quando entra na tela.
 * @param {string} as        - tag a renderizar (default 'div')
 * @param {number} index     - índice do item no grid → stagger automático (min(index,6)*70ms)
 * @param {number} delay      - delay explícito em ms (sobrescreve index)
 */
export default function Reveal({ as: Tag = 'div', index, delay, className = '', children, ...rest }) {
  const d = delay != null ? delay : Math.min(index ?? 0, 6) * 70
  const ref = useReveal({ delay: d })
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}