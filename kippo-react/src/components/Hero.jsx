import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'

const WHATSAPP = 'https://wa.me/5567993404143'
const EASE = [0.16, 1, 0.3, 1] /* ease-out-expo-ish, sem bounce */

export default function Hero() {
  const { t } = useI18n()
  const reduce = useReducedMotion()
  const [ready, setReady] = useState(false)

  /* A coreografia começa quando o Intro termina (evento kippo:intro-done).
     Se o Intro não rodar (reduced-motion / sessão já vista), revela na hora. */
  useEffect(() => {
    const introPlaying = document.body.classList.contains('is-intro')
    if (!introPlaying) { setReady(true); return }
    const onDone = () => setReady(true)
    window.addEventListener('kippo:intro-done', onDone)
    const safety = setTimeout(() => setReady(true), 3000) /* guarda caso o evento não venha */
    return () => { window.removeEventListener('kippo:intro-done', onDone); clearTimeout(safety) }
  }, [])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.05 } }
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.6, ease: EASE } }
  }
  const titleItem = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.85, ease: EASE } }
  }

  return (
    <section className="hero" id="inicio" tabIndex={-1}>
      <motion.div
        className="container hero__inner"
        variants={container}
        initial="hidden"
        animate={ready ? 'show' : 'hidden'}
      >
        <motion.div className="hero__meta" variants={item}>
          <span className="hero__index">{t('hero.studio')}</span>
          <span className="hero__loc">{t('hero.loc')}</span>
        </motion.div>

        <motion.h1 className="hero__title" variants={titleItem}>
          <span dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
        </motion.h1>

        <motion.div className="hero__lead" variants={item}>
          <p>{t('hero.lead')}</p>
        </motion.div>

        <motion.div className="hero__actions" variants={item}>
          <a href={WHATSAPP} className="btn btn--primary" target="_blank" rel="noopener">{t('hero.ctaPrimary')}</a>
          <Link to="/#projetos" className="btn btn--ghost">
            <span>{t('hero.ctaGhost')}</span> <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <motion.div className="hero__reassure" variants={item}>
          <span>{t('hero.reassure')}</span>
        </motion.div>

        <motion.ul className="hero__credentials" variants={item}>
          <li><span className="cred__dot"></span><span>{t('hero.cred1')}</span></li>
          <li><span className="cred__dot"></span><span>{t('hero.cred2')}</span></li>
          <li><span className="cred__dot"></span><span>{t('hero.cred3')}</span></li>
        </motion.ul>
      </motion.div>
    </section>
  )
}