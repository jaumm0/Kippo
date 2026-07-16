import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

const WHATSAPP = 'https://wa.me/5567993404143'

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
          <a href={WHATSAPP} className="btn btn--primary" target="_blank" rel="noopener">{t('hero.ctaPrimary')}</a>
          <Link to="/#projetos" className="btn btn--ghost">
            <span>{t('hero.ctaGhost')}</span> <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal className="hero__reassure" index={4}>
          <span>{t('hero.reassure')}</span>
        </Reveal>

        <Reveal as="ul" className="hero__credentials" index={5}>
          <li><span className="cred__dot"></span><span>{t('hero.cred1')}</span></li>
          <li><span className="cred__dot"></span><span>{t('hero.cred2')}</span></li>
          <li><span className="cred__dot"></span><span>{t('hero.cred3')}</span></li>
        </Reveal>
      </div>
    </section>
  )
}