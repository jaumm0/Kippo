import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import { useScrolled } from '../hooks/useScrolled'

const NAV = [
  { target: 'inicio', key: 'nav.home', hash: '/#inicio' },
  { target: 'processo', key: 'nav.services', hash: '/#processo' },
  { target: 'projetos', key: 'nav.work', hash: '/#projetos' },
  { target: 'contato', key: 'nav.contact', hash: '/contato' }
]

export default function Header() {
  const { t, lang, setLang } = useI18n()
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 820) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <a className="skip-link" href="#inicio">{t('nav.skip')}</a>

      <header className={`header${scrolled ? ' is-scrolled' : ''}`} id="header">
        <div className="container header__inner">
          <Link to="/" className="logo" aria-label="KIPPO — página inicial">
            <span className="logo__dot" aria-hidden="true"></span>
            <span className="logo__text">KIPPO</span>
          </Link>

          <nav className={`nav${open ? ' is-open' : ''}`} id="nav" aria-label="Navegação principal">
            <div className="nav__section">
              <span className="nav__section-label">{t('nav.section')}</span>
              <div className="nav__list">
                {NAV.map((item) => (
                  <Link
                    key={item.target}
                    to={item.hash}
                    className="nav__link"
                    data-target={item.target}
                    onClick={() => setOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="lang" role="group" aria-label="Selecionar idioma">
            <button
              type="button"
              className={`lang__btn${lang === 'pt' ? ' is-active' : ''}`}
              aria-label="Português"
              title="Português"
              aria-pressed={lang === 'pt'}
              onClick={() => setLang('pt')}
            >
              <span className="lang__code">PT</span>
            </button>
            <button
              type="button"
              className={`lang__btn${lang === 'en' ? ' is-active' : ''}`}
              aria-label="English"
              title="English"
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              <span className="lang__code">EN</span>
            </button>
          </div>

          <button
            className={`nav__toggle${open ? ' is-open' : ''}`}
            id="navToggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  )
}