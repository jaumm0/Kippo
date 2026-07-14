import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

const WITHOUT = ['i1', 'i2', 'i3', 'i4']
const WITH = ['i1', 'i2', 'i3', 'i4']

export default function Compare() {
  const { t } = useI18n()

  return (
    <section className="compare" id="impacto">
      <div className="container">
        <div className="compare__head">
          <Reveal as="p" className="compare__eyebrow">{t('compare.eyebrow')}</Reveal>
          <Reveal as="h2" className="compare__title" index={1}>{t('compare.title')}</Reveal>
          <Reveal as="p" className="compare__desc" index={2}>{t('compare.desc')}</Reveal>
        </div>

        <div className="compare__grid">
          <Reveal as="article" className="compare-card compare-card--neg" index={1}>
            <div className="compare-card__icon compare-card__icon--neg" aria-hidden="true">−</div>
            <p className="compare-card__label">{t('compare.without.label')}</p>
            <h3 className="compare-card__name">{t('compare.without.title')}</h3>

            <div className="compare-metric compare-metric--neg">
              <span className="compare-metric__tag">{t('compare.without.metricLabel')}</span>
              <p className="compare-metric__value">{t('compare.without.metric')}</p>
              <div className="compare-metric__bars compare-metric__bars--down" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
            </div>

            <ul className="compare-list">
              {WITHOUT.map((id) => (
                <li key={id}>
                  <span className="compare-list__mark compare-list__mark--neg" aria-hidden="true">−</span>
                  <div>
                    <strong>{t(`compare.without.${id}t`)}</strong>
                    <p>{t(`compare.without.${id}d`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="compare-card compare-card--pos" index={2}>
            <span className="compare-card__badge">{t('compare.with.badge')}</span>
            <div className="compare-card__icon compare-card__icon--pos" aria-hidden="true">✓</div>
            <p className="compare-card__label">{t('compare.with.label')}</p>
            <h3 className="compare-card__name">{t('compare.with.title')}</h3>

            <div className="compare-metric compare-metric--pos">
              <span className="compare-metric__tag">{t('compare.with.metricLabel')}</span>
              <p className="compare-metric__value">{t('compare.with.metric')}</p>
              <p className="compare-metric__sub">{t('compare.with.metricSub')}</p>
              <div className="compare-metric__bars compare-metric__bars--up" aria-hidden="true">
                <span /><span /><span /><span /><span />
              </div>
            </div>

            <p className="compare-gains">{t('compare.with.gains')}</p>
            <ul className="compare-list">
              {WITH.map((id) => (
                <li key={id}>
                  <span className="compare-list__mark compare-list__mark--pos" aria-hidden="true">✓</span>
                  <div>
                    <strong>{t(`compare.with.${id}t`)}</strong>
                    <p>{t(`compare.with.${id}d`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
