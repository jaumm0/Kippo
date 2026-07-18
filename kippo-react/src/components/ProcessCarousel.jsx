import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import { projects } from '../data/projects'

const INTERVAL = 4500
const EASE = [0.22, 0.61, 0.36, 1]

export default function ProcessCarousel() {
  const { t, lang } = useI18n()
  const reduce = useReducedMotion()
  const items = projects.filter((p) => p.cover)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduce || paused || items.length <= 1) return
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), INTERVAL)
    return () => clearInterval(id)
  }, [reduce, paused, items.length])

  const p = items[active]
  if (!p) return null

  return (
    <div
      className="pcarousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Link to={`/projeto/${p.id}`} className="pcarousel__stage" aria-label={p.title[lang]}>
        <AnimatePresence mode="sync">
          <motion.div
            key={p.id}
            className="pcarousel__slide"
            style={{ backgroundImage: `url('${p.cover}')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
        </AnimatePresence>
      </Link>
      <div className="pcarousel__cap">
        <span className="pcarousel__tag">{t('process.results')}</span>
        <span className="pcarousel__title">{p.title[lang]}</span>
      </div>
    </div>
  )
}