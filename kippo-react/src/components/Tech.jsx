import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import { TECHS } from '../data/tech'

/* Ícones line (24x24, currentColor) — minimalistas, on-brand.
   Chave = `icon` no objeto da tecnologia. */
const TECH_ICONS = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Inter, sans-serif">JS</text>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Inter, sans-serif">TS</text>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M12 3l7.5 4.3v9.4L12 21l-7.5-4.3V7.3z" />
      <path d="M9 13.5c0 1.4 1 2 2.3 2 1.5 0 2-.6 2-1.5 0-1-.8-1.3-2-1.6-1.4-.3-2-.7-2-1.6 0-.8.7-1.4 1.8-1.4s1.9.5 1.9 1.4" />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="9" r="2.2" />
      <path d="M6 8.2v7.6" />
      <path d="M18 11.2c0 4.4-6 2.4-6 6.6" />
    </svg>
  ),
  rest: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4.5c-2.2 0-3 .8-3 3v2.2c0 1.2-.7 2-2 2.3 1.3.3 2 1.1 2 2.3v2.2c0 2.2.8 3 3 3" />
      <path d="M15 4.5c2.2 0 3 .8 3 3v2.2c0 1.2.7 2 2 2.3-1.3.3-2 1.1-2 2.3v2.2c0 2.2-.8 3-3 3" />
    </svg>
  )
}

const MOBILE_MQ = '(max-width: 768px)'
const AUTO_PLAY_MS = 4500
const RESUME_AFTER_MS = 8000

export default function Tech() {
  const { t, lang } = useI18n()
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [userPaused, setUserPaused] = useState(false)
  const paused = !isVisible || userPaused
  const tech = TECHS[active]
  const itemRefs = useRef([])
  const sectionRef = useRef(null)
  const hoverTimer = useRef(null)
  const resumeTimer = useRef(null)

  const scheduleActive = (i) => {
    clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setActive(i), 120)
  }

  const selectTech = (i) => {
    setActive(i)
    if (!isMobile) return
    setUserPaused(true)
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setUserPaused(false), RESUME_AFTER_MS)
  }

  useEffect(() => () => {
    clearTimeout(hoverTimer.current)
    clearTimeout(resumeTimer.current)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isMobile || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % TECHS.length)
    }, AUTO_PLAY_MS)

    return () => clearInterval(id)
  }, [isMobile, paused])

  useEffect(() => {
    if (!isMobile || !sectionRef.current) return

    const io = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.25 })

    io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [isMobile])

  useEffect(() => {
    const el = itemRefs.current[active]
    if (!el || !isMobile) return
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active, isMobile])

  return (
    <section className="section section--alt" id="tecnologias" ref={sectionRef}>
      <div className="container">
        <div className="section__head">
          <Reveal as="h2" className="section__title">{t('tech.title')}</Reveal>
          <Reveal as="p" className="section__desc" index={1}>{t('tech.desc')}</Reveal>
        </div>

        <Reveal className="tech-stack" index={2}>
          <div className="tech-carousel">
            <ul className="tech-list" onMouseLeave={() => clearTimeout(hoverTimer.current)}>
              {TECHS.map((item, i) => (
                <li key={item.name[lang]} ref={(el) => { itemRefs.current[i] = el }}>
                  <motion.button
                    type="button"
                    className={`tech${i === active ? ' is-active' : ''}`}
                    onClick={() => selectTech(i)}
                    onMouseEnter={() => !isMobile && scheduleActive(i)}
                    whileHover={isMobile ? undefined : { scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    aria-pressed={i === active}
                  >
                    {item.name[lang]}
                  </motion.button>
                </li>
              ))}
            </ul>

            {isMobile && (
              <div className="tech-carousel__foot">
                <div className="tech-dots">
                  {TECHS.map((item, i) => (
                    <button
                      key={item.name[lang]}
                      type="button"
                      className={`tech-dot${i === active ? ' is-active' : ''}`}
                      onClick={() => selectTech(i)}
                      aria-label={item.name[lang]}
                    />
                  ))}
                </div>
                <div className="tech-progress">
                  <div
                    key={active}
                    className={`tech-progress__fill${paused ? ' is-paused' : ''}`}
                    style={{ animationDuration: `${AUTO_PLAY_MS}ms` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="tech-panel" aria-live="polite">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="tech-panel__inner"
            >
              <div className="tech-panel__head">
                <span className="tech-panel__icon" aria-hidden="true">{TECH_ICONS[tech.icon]}</span>
                <div>
                  <h3 className="tech-panel__name">{tech.name[lang]}</h3>
                  {tech.exp && <span className="tech-panel__exp">{tech.exp[lang]}</span>}
                </div>
              </div>

              <p className="tech-panel__desc">{tech.description[lang]}</p>

              <div className="tech-panel__block">
                <p className="tech-panel__label">{t('tech.advantages')}</p>
                <ul className="tech-panel__list">
                  {tech.advantages[lang].map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-panel__block">
                <p className="tech-panel__label">{t('tech.uses')}</p>
                <p className="tech-panel__uses">{tech.uses[lang].join(', ')}.</p>
              </div>

            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}