import { useEffect, useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
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

function ProjectCarousel({ project, reduce, t }) {
  const slides = project.gallery && project.gallery.length > 0
    ? project.gallery
    : (project.cover ? [project.cover] : [])
  const [index, setIndex] = useState(0)
  const total = slides.length

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + total) % total)
  }, [total])

  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (total <= 1) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, total])

  // Auto-play: avança a cada 4,5s, pausando no hover/foco. Desativa se o
  // usuário pede reduced motion. Reinicia a contagem a cada troca (manual
  // ou automática) para não avançar logo depois de uma interação.
  useEffect(() => {
    if (reduce || total <= 1 || paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4500)
    return () => clearInterval(id)
  }, [reduce, total, paused, index])

  // Sem imagens: fallback de gradiente com a inicial do projeto.
  if (total === 0) {
    return (
      <motion.div
        className="proj-hero__cover proj-hero__cover--grad"
        style={{ '--c1': project.c1, '--c2': project.c2 }}
        layoutId={reduce ? undefined : `cover-${project.id}`}
      >
        <span className="proj-hero__init">{project.init}</span>
      </motion.div>
    )
  }

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40, scale: 1.01 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40, scale: 0.99 })
  }

  return (
    <div
      className="proj-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={t('projDetail.gallery')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <motion.div
        className="proj-carousel__viewport"
        layoutId={reduce ? undefined : `cover-${project.id}`}
      >
        <AnimatePresence initial={false} custom={1} mode="popLayout">
          <motion.div
            key={index}
            className="proj-carousel__slide"
            style={{ backgroundImage: `url('${slides[index]}')` }}
            custom={1}
            variants={reduce ? undefined : slideVariants}
            initial={reduce ? false : 'enter'}
            animate="center"
            exit={reduce ? undefined : 'exit'}
            transition={reduce ? { duration: 0.2 } : { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            aria-hidden={false}
          />
        </AnimatePresence>
      </motion.div>

      {total > 1 && (
        <>
          <button
            type="button"
            className="proj-carousel__btn proj-carousel__btn--prev"
            onClick={() => go(-1)}
            aria-label={t('projDetail.prev')}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            className="proj-carousel__btn proj-carousel__btn--next"
            onClick={() => go(1)}
            aria-label={t('projDetail.next')}
          >
            <span aria-hidden="true">›</span>
          </button>
          <div className="proj-carousel__dots" role="tablist">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`proj-carousel__dot${i === index ? ' is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`${t('projDetail.gallery')} ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
          <span className="proj-carousel__count" aria-hidden="true">
            {index + 1} / {total}
          </span>
        </>
      )}
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const { t, lang } = useI18n()
  const p = getProject(id)
  const reduce = useReducedMotion()

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

  const cover = <ProjectCarousel project={p} reduce={reduce} t={t} />

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