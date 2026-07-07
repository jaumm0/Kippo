import { useEffect, useRef } from 'react'

/**
 * Observa um elemento e adiciona a classe `is-visible` quando ele entra na tela,
 * disparando a animação `.reveal` definida em index.css.
 * @param {object} opts
 * @param {number} opts.delay   - transition-delay em ms (stagger)
 * @param {number} opts.threshold
 * @param {string} opts.rootMargin
 */
export function useReveal({ delay = 0, threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay + 'ms'
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      })
    }, { threshold, rootMargin })

    io.observe(el)
    return () => io.disconnect()
  }, [delay, threshold, rootMargin])

  return ref
}