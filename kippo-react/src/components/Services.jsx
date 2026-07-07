import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

const FEATURED = { key: 'c1' }
const SMALL = [{ key: 'c2' }, { key: 'c3' }, { key: 'c4' }]

export default function Services() {
  const { t } = useI18n()

  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="section__head">
          <Reveal as="h2" className="section__title">{t('services.title')}</Reveal>
          <Reveal as="p" className="section__desc" index={1}>{t('services.desc')}</Reveal>
        </div>

        <div className="services-grid">
          {/* Card destaque: Landing Pages (produto-core de conversão) */}
          <Reveal as="article" className="card card--featured">
            <div className="card--featured__intro">
              <span className="card__tag card__tag--top">{t(`services.${FEATURED.key}.tag`)}</span>
              <h3 className="card__title card__title--lg">{t(`services.${FEATURED.key}.title`)}</h3>
              <p className="card__text card__text--lg">{t(`services.${FEATURED.key}.text`)}</p>
            </div>
            <ul className="card--featured__list">
              {t(`services.${FEATURED.key}.items`).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          {/* 3 cards menores à direita */}
          {SMALL.map((c, i) => (
            <Reveal as="article" key={c.key} index={i + 1} className="card card--small">
              <h3 className="card__title">{t(`services.${c.key}.title`)}</h3>
              <p className="card__text">{t(`services.${c.key}.text`)}</p>
              <span className="card__tag">{t(`services.${c.key}.tag`)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}