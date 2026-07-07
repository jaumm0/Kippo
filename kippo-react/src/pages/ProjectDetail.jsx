import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProject } from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const pageTransition = { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }

function setMeta(selector, attr, content) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, content)
}

export default function ProjectDetail() {
  const { id } = useParams()
  const { t, lang } = useI18n()
  const p = getProject(id)

  useEffect(() => {
    if (p) {
      document.title = `${p.title[lang]} — KIPPO`
      setMeta('meta[name="description"]', 'content', p.summary[lang])
      setMeta('meta[property="og:title"]', 'content', `${p.title[lang]} — KIPPO`)
      setMeta('meta[property="og:description"]', 'content', p.summary[lang])
    } else {
      document.title = t('_title')
    }
  }, [p, lang, t])

  if (!p) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <div className="container pt-24">
          <div className="proj-notfound">
            <p>{t('projDetail.notFound')}</p>
            <Link to="/#projetos" className="btn btn--ghost">← {t('projDetail.backHome')}</Link>
          </div>
        </div>
      </motion.div>
    )
  }

  const cover = p.cover
    ? <div className="proj-hero__cover" style={{ backgroundImage: `url('${p.cover}')` }} />
    : (
      <div className="proj-hero__cover proj-hero__cover--grad" style={{ '--c1': p.c1, '--c2': p.c2 }}>
        <span className="proj-hero__init">{p.init}</span>
      </div>
    )

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <div className="container pt-24">
        <Link to="/#projetos" className="proj-back">← <span>{t('proj.back')}</span></Link>
      </div>

      <header className="proj-hero">
        <div className="container">{cover}</div>
        <div className="container proj-hero__meta">
          <Reveal as="p" className="proj-eyebrow">{t('projDetail.eyebrow')}</Reveal>
          <Reveal as="h1" className="proj-title" index={1}>{p.title[lang]}</Reveal>
          <Reveal as="p" className="proj-summary" index={2}>{p.summary[lang]}</Reveal>
          <Reveal className="proj-tags" index={3}>
            {p.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </Reveal>
        </div>
      </header>

      <div className="container proj-grid">
        <div className="proj-main">
          <Reveal as="section" className="proj-block">
            <h2 className="proj-block__title">{t('projDetail.overview')}</h2>
            <div className="proj-block__body">
              {p.overview[lang].map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </Reveal>

          <Reveal as="section" className="proj-block" index={1}>
            <h2 className="proj-block__title">{t('projDetail.techUsed')}</h2>
            <div className="proj-tech">
              {p.tech.map((tc, i) => (
                <Reveal as="article" key={tc.name} index={i} className="proj-tech__item">
                  <h3 className="proj-tech__name">{tc.name}</h3>
                  <p className="proj-tech__desc">{tc.desc[lang]}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal as="section" className="proj-block" index={2}>
            <h2 className="proj-block__title">{t('projDetail.focusTitle')}</h2>
            <div className="proj-block__body"><p>{p.focus[lang]}</p></div>
          </Reveal>

          <Reveal as="section" className="proj-block" index={3}>
            <h2 className="proj-block__title">{t('projDetail.highlights')}</h2>
            <ul className="proj-highlights">
              {p.highlights[lang].map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </Reveal>
        </div>

        <aside className="proj-aside">
          <Reveal as="div" className="proj-card">
            <div className="proj-card__row">
              <span className="proj-card__label">{t('projDetail.duration')}</span>
              <span className="proj-card__value">{p.duration[lang]}</span>
            </div>
            <div className="proj-card__row">
              <span className="proj-card__label">{t('projDetail.focus')}</span>
              <span className="proj-card__value">{p.focus[lang]}</span>
            </div>
            <div className="proj-card__row">
              <span className="proj-card__label">{t('projDetail.stack')}</span>
              <span className="proj-card__value">{p.tags.join(' · ')}</span>
            </div>
          </Reveal>

          {(p.liveUrl || p.repoUrl) && (
            <Reveal className="proj-actions" index={1}>
              {p.liveUrl && (
                <a className="btn btn--primary" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                  {t('projDetail.viewLive')} <span className="arrow" aria-hidden="true">→</span>
                </a>
              )}
              {p.repoUrl && (
                <a className="btn btn--ghost" href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                  {t('projDetail.code')}
                </a>
              )}
            </Reveal>
          )}
        </aside>
      </div>
    </motion.div>
  )
}