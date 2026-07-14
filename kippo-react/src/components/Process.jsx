import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

/* Alterna direita → esquerda, como no desenho.
   side: 'right' | 'left' */
const STEPS = [
  { id: 's1', side: 'right' },
  { id: 's2', side: 'left' },
  { id: 's3', side: 'right' },
  { id: 's4', side: 'left' },
  { id: 's5', side: 'right' },
  { id: 's6', side: 'left' }
]

function BranchCurve({ side }) {
  /* Curva CSS/SVG: da coluna do meio até a caixa */
  const d = side === 'right'
    ? 'M 0 0 C 28 0, 42 28, 80 28'
    : 'M 80 0 C 52 0, 38 28, 0 28'

  return (
    <svg
      className={`process-branch process-branch--${side}`}
      viewBox="0 0 80 40"
      fill="none"
      aria-hidden="true"
    >
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle
        cx={side === 'right' ? 80 : 0}
        cy="28"
        r="3.5"
        fill="currentColor"
      />
    </svg>
  )
}

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

        <div className="process">
          <div className="process__spine" aria-hidden="true" />

          <ol className="process__tree">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.id}
                index={i}
                className={`process-step process-step--${step.side}`}
              >
                <div className="process-step__node" aria-hidden="true" />
                <BranchCurve side={step.side} />
                <article className="process-card">
                  <span className="process-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="process-card__title">{t(`process.${step.id}.title`)}</h3>
                  <p className="process-card__text">{t(`process.${step.id}.text`)}</p>
                </article>
              </Reveal>
            ))}
          </ol>

          <Reveal className="process-final" index={6}>
            <p className="process-final__label">{t('process.final.label')}</p>
            <h3 className="process-final__title">{t('process.final.title')}</h3>
            <p className="process-final__text">{t('process.final.text')}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
