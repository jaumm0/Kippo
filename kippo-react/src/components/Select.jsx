import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/**
 * Dropdown customizado (substitui o <select> nativo) com painel animado,
 * navegação por teclado, fechamento ao clicar fora e estado selecionado.
 * Pattern ARIA combobox/listbox: o foco permanece no trigger e
 * aria-activedescendant aponta para a opção ativa (anunciada ao SR).
 *
 * @param {string} value            - valor atual (string)
 * @param {(v:string)=>void} onChange
 * @param {{value:string,label:string}[]} options
 * @param {string} placeholder
 * @param {string} id
 * @param {boolean} invalid         - exibe estado de erro (aria-invalid)
 * @param {boolean} required        - aria-required
 * @param {string} ariaDescribedby  - id do elemento de erro/descrição
 */
export default function Select({ value, onChange, options, placeholder, id, invalid, required, ariaDescribedby }) {
  const [open, setOpen] = useState(false)
  const [focusIdx, setFocusIdx] = useState(-1)
  const rootRef = useRef(null)
  const listRef = useRef(null)
  const reduce = useReducedMotion()

  const selectedIdx = options.findIndex((o) => String(o.value) === String(value))
  const selected = selectedIdx >= 0 ? options[selectedIdx] : null

  // Fecha ao clicar fora
  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  // Reset do foco visual ao fechar
  useEffect(() => {
    if (!open) setFocusIdx(-1)
  }, [open])

  // Rola a opção ativa para dentro do painel (fora do render)
  useEffect(() => {
    if (!open || focusIdx < 0) return
    const el = listRef.current?.children[focusIdx]
    if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' })
  }, [focusIdx, open])

  const choose = (val) => {
    onChange(val)
    setOpen(false)
  }

  const onTriggerKey = (e) => {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setOpen(true)
        setFocusIdx(selectedIdx >= 0 ? selectedIdx : 0)
      }
      return
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusIdx((i) => Math.min(i + 1, options.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusIdx((i) => Math.max(i - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (focusIdx >= 0) choose(options[focusIdx].value)
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        break
      case 'Tab':
        setOpen(false)
        break
      default:
        break
    }
  }

  const panelVariants = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { opacity: 0, y: -8, scaleY: 0.94 }, animate: { opacity: 1, y: 0, scaleY: 1 }, exit: { opacity: 0, y: -8, scaleY: 0.94 } }

  return (
    <div className="select-wrap" ref={rootRef}>
      <button
        type="button"
        id={id}
        className={`select${open ? ' is-open' : ''}${selected ? ' is-filled' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        aria-activedescendant={open && focusIdx >= 0 ? `${id}-opt-${focusIdx}` : undefined}
        aria-invalid={invalid ? 'true' : undefined}
        aria-required={required ? 'true' : undefined}
        aria-describedby={ariaDescribedby || undefined}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKey}
      >
        <span className={selected ? '' : 'select__placeholder'}>
          {selected ? selected.label : placeholder}
        </span>
        <span className={`select__chevron${open ? ' is-open' : ''}`} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={`${id}-listbox`}
            role="listbox"
            ref={listRef}
            className="select__panel"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={panelVariants}
            transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
          >
            {options.map((o, i) => {
              const isSel = String(o.value) === String(value)
              return (
                <li
                  key={o.value}
                  id={`${id}-opt-${i}`}
                  role="option"
                  aria-selected={isSel}
                  className={`select__option${isSel ? ' is-selected' : ''}${i === focusIdx ? ' is-focused' : ''}`}
                  onMouseEnter={() => setFocusIdx(i)}
                  onClick={() => choose(o.value)}
                >
                  <span>{o.label}</span>
                  {isSel && (
                    <svg className="select__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}