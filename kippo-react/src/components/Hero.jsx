import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="inicio" tabIndex={-1}>
      <div className="container hero__inner">
        <Reveal className="hero__meta">
          <span className="hero__index">{t('hero.studio')}</span>
          <span className="hero__loc">{t('hero.loc')}</span>
        </Reveal>

        <Reveal as="h1" className="hero__title" index={1}>
          <span dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
        </Reveal>

        <Reveal className="hero__lead" index={2}>
          <p>{t('hero.lead')}</p>
        </Reveal>

        <Reveal className="hero__actions" index={3}>
          <Link to="/contato" className="btn btn--primary">{t('hero.ctaPrimary')}</Link>
          <Link to="/#projetos" className="btn btn--ghost">
            <span>{t('hero.ctaGhost')}</span> <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal as="ul" className="hero__credentials" index={4}>
          <li><span className="cred__dot"></span><span>{t('hero.cred1')}</span></li>
          <li><span className="cred__dot"></span><span>{t('hero.cred2')}</span></li>
          <li><span className="cred__dot"></span><span>{t('hero.cred3')}</span></li>
        </Reveal>
      </div>
    </section>
  )
}