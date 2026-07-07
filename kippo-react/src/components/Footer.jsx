import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="logo logo--light">
            <span className="logo__dot" aria-hidden="true"></span>
            <span className="logo__text">KIPPO</span>
          </Link>
          <p className="footer__tagline">{t('footer.tagline')}</p>
        </div>

        <nav className="footer__nav" aria-label="Rodapé">
          <Link to="/#servicos">{t('nav.services')}</Link>
          <Link to="/#projetos">{t('nav.work')}</Link>
          <Link to="/contato">{t('nav.contact')}</Link>
        </nav>

        <div className="footer__contact">
          <a
            href="https://wa.me/5567993404143"
            target="_blank"
            rel="noopener"
            className="footer__contact-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.037zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            WhatsApp
          </a>
          <a href="mailto:contato@kippo.dev" className="footer__contact-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
            contato@kippo.dev
          </a>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/kipposystems/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram KIPPO"
              title="Instagram KIPPO"
              className="footer__social"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/joaoanjoadev/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="footer__social"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0 4.881 0 3.5 1.13 1 2.5 1s2.48 1.119 2.48 2.5zM.22 8h4.56v14H.22V8zm7.84 0h4.37v1.91h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.48 3.05 5.48 7.01V22h-4.56v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.49V22H8.06V8z"/></svg>
            </a>
            <a
              href="https://github.com/jaumm0"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              title="GitHub"
              className="footer__social"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12.5C24 5.87 18.63.5 12 .5z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            &copy; {year} KIPPO. {t('footer.rights')} ·{' '}
            <a
              className="footer__madeby"
              href="https://www.instagram.com/eujoaoanjos/"
              target="_blank"
              rel="noopener"
            >
              {t('footer.madeby')} @Joao dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}