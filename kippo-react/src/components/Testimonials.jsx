import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

const ITEMS = [
  { q: 'test.q1', role: 'test.r1', bg: '#10B981', initials: 'MR', name: 'Marina Rocha' },
  { q: 'test.q2', role: 'test.r2', bg: '#065F46', initials: 'LS', name: 'Lucas Soares' },
  { q: 'test.q3', role: null, bg: '#1F2937', initials: 'FA', name: 'Fernanda Alves', fixedRole: 'CMO · FinTech Group' }
]

export default function Testimonials() {
  const { t } = useI18n()

  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <div className="section__head">
          <Reveal as="h2" className="section__title">{t('test.title')}</Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {ITEMS.map((item, i) => (
            <Reveal as="figure" key={item.initials} index={i} className="testimonial">
              <blockquote>{t(item.q)}</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="testimonial__avatar" style={{ '--bg': item.bg }}>{item.initials}</span>
                <div>
                  <strong>{item.name}</strong>
                  <span className="block text-[.8125rem] text-ink-muted">
                    {item.role ? t(item.role) : item.fixedRole}
                  </span>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}