import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

export default function CTA() {
  const { t } = useI18n()

  return (
    <section className="cta" id="contato">
      <div className="container cta__inner">
        <Reveal as="h2" className="cta__title">{t('cta.title')}</Reveal>
        <Reveal as="p" className="cta__text" index={1}>{t('cta.text')}</Reveal>
        <Reveal className="cta__actions" index={2}>
          <a
            href="https://wa.me/5567993404143"
            className="btn btn--light"
            target="_blank"
            rel="noopener"
          >
            {t('cta.btn')}
          </a>
        </Reveal>
      </div>
    </section>
  )
}