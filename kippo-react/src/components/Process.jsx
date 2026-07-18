import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import ProcessCarousel from './ProcessCarousel'

/* Timeline vertical à esquerda + carrossel de resultados (aside sticky à direita). */
const STEPS = ['s1', 's2', 's3', 's4', 's5', 's6']

export default function Process() {
  const { t } = useI18n()

  return (
    <section className="section section--alt" id="processo">
      <div className="container">
        <div className="section__head">
          <Reveal as="p" className="section__eyebrow">{t('process.eyebrow')}</Reveal>
          <Reveal as="h2" className="section__title" index={1}>{t('process.title')}</Reveal>
          <Reveal as="p" className="section__desc" index={2}>{t('process.desc')}</Reveal>
        </div>

        <div className="process__grid">
          <div className="process">
            <ol className="process__list">
              {STEPS.map((id, i) => (
                <Reveal as="li" key={id} index={i} className="process-step">
                  <span className="process-step__node" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div className="process-card">
                    <h3 className="process-card__title">{t(`process.${id}.title`)}</h3>
                    <p className="process-card__text">{t(`process.${id}.text`)}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="process-final" index={6}>
              <p className="process-final__label">{t('process.final.label')}</p>
              <h3 className="process-final__title">{t('process.final.title')}</h3>
              <p className="process-final__text">{t('process.final.text')}</p>
            </Reveal>
          </div>

          <aside className="process__aside">
            <ProcessCarousel />
          </aside>
        </div>
      </div>
    </section>
  )
}