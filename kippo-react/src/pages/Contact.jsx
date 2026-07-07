import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import Select from '../components/Select'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}
const pageTransition = { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }
const stepVariants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 }
}
const stepTransition = { duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }

const WHATSAPP = 'https://wa.me/5567993404143'

const PROJECT_TYPES = [
  { pt: 'Landing Page', en: 'Landing Page' },
  { pt: 'Site Institucional', en: 'Institutional Website' },
  { pt: 'Sistema Web', en: 'Web System' },
  { pt: 'Automação', en: 'Automation' },
  { pt: 'Outro', en: 'Other' }
]
const BUDGETS = [
  { pt: 'R$ 300 – 500', en: 'R$ 300 – 500' },
  { pt: 'Até R$ 2.000', en: 'Up to R$ 2,000' },
  { pt: 'R$ 2.000 – 5.000', en: 'R$ 2,000 – 5,000' },
  { pt: 'R$ 5.000 – 10.000', en: 'R$ 5,000 – 10,000' },
  { pt: 'Acima de R$ 10.000', en: 'Above R$ 10,000' },
  { pt: 'A combinar', en: 'To be agreed' }
]
const DEADLINES = [
  { pt: 'O quanto antes', en: 'As soon as possible' },
  { pt: '2 a 4 semanas', en: '2–4 weeks' },
  { pt: '1 a 2 meses', en: '1–2 months' },
  { pt: 'Mais de 2 meses', en: '2+ months' },
  { pt: 'Sem pressa', en: 'No rush' }
]
const TEAMS = [
  { pt: 'Sou autônomo', en: 'I work solo' },
  { pt: '1 a 10', en: '1–10' },
  { pt: '11 a 50', en: '11–50' },
  { pt: '51 a 200', en: '51–200' },
  { pt: '201 a 500', en: '201–500' },
  { pt: 'Mais de 500', en: '500+' }
]

const STATS = [
  { num: '100+', key: 'contact.stat1' },
  { num: '8h', key: 'contact.stat2' },
  { num: '7', key: 'contact.stat3' }
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function maskBRPhone(raw) {
  const d = raw.replace(/\D/g, '').slice(0, 11)
  if (!d) return ''
  const ddd = d.slice(0, 2)
  const rest = d.slice(2)
  let out = '(' + ddd
  if (d.length > 2) out += ') '
  if (rest.length <= 8) {
    out += rest.slice(0, 4)
    if (rest.length > 4) out += '-' + rest.slice(4, 8)
  } else {
    out += rest.slice(0, 5)
    if (rest.length > 5) out += '-' + rest.slice(5, 9)
  }
  return out
}

function setMeta(selector, attr, content) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, content)
}

export default function Contact() {
  const { t, lang } = useI18n()

  // Passo 1 — projeto
  const [tipo, setTipo] = useState('')
  const [orcamento, setOrcamento] = useState('')
  const [prazo, setPrazo] = useState('')
  const [detalhes, setDetalhes] = useState('')
  // Passo 2 — contato
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [colab, setColab] = useState('')
  const [site, setSite] = useState('')

  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})

  const step2FirstRef = useRef(null)
  const nextBtnRef = useRef(null)
  const mountedRef = useRef(false)

  const tipoOptions = PROJECT_TYPES.map((o, i) => ({ value: String(i), label: o[lang] }))
  const orcOptions = BUDGETS.map((o, i) => ({ value: String(i), label: o[lang] }))
  const prazoOptions = DEADLINES.map((o, i) => ({ value: String(i), label: o[lang] }))
  const teamOptions = TEAMS.map((o, i) => ({ value: String(i), label: o[lang] }))

  useEffect(() => {
    document.title = t('contact._title')
    setMeta('meta[name="description"]', 'content', t('contact._desc'))
    setMeta('meta[property="og:title"]', 'content', t('contact._title'))
    setMeta('meta[property="og:description"]', 'content', t('contact._desc'))
  }, [t])

  // Move o foco ao trocar de passo (pula a primeira montagem).
  useEffect(() => {
    if (!mountedRef.current) { mountedRef.current = true; return }
    if (step === 2) step2FirstRef.current?.focus()
    else nextBtnRef.current?.focus()
  }, [step])

  const goToStep2 = () => {
    if (!tipo) { setErrors({ tipo: t('contact.errRequired') }); return }
    setErrors({})
    setStep(2)
  }

  const backToStep1 = () => { setErrors({}); setStep(1) }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!nome.trim()) nextErrors.nome = t('contact.errRequired')
    if (!EMAIL_RE.test(email.trim())) nextErrors.email = t('contact.errEmail')
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return }

    const dash = '—'
    const val = (v, list) => (v ? list[parseInt(v, 10)]?.[lang] : dash)
    const tipoVal = tipo ? PROJECT_TYPES[parseInt(tipo, 10)]?.[lang] : dash
    const orcVal = val(orcamento, BUDGETS)
    const prazoVal = val(prazo, DEADLINES)
    const colabVal = colab ? TEAMS[parseInt(colab, 10)]?.[lang] : dash
    const detalheVal = detalhes.trim() || dash
    const telefoneVal = telefone.trim() || dash
    const siteVal = site.trim() || dash

    const msg = lang === 'en'
      ? `Hi KIPPO! I want to bring a project to life.\n\nProject type: ${tipoVal}\nBudget: ${orcVal}\nDeadline: ${prazoVal}\nDetails: ${detalheVal}\n\nName: ${nome.trim()}\nEmail: ${email.trim()}\nPhone: +55 ${telefoneVal}\nCompany: ${empresa.trim() || dash}\nTeam size: ${colabVal}\nWebsite: ${siteVal}`
      : `Olá, KIPPO! Quero tirar um projeto do papel.\n\nTipo de projeto: ${tipoVal}\nOrçamento: ${orcVal}\nPrazo: ${prazoVal}\nDetalhes: ${detalheVal}\n\nNome: ${nome.trim()}\nE-mail: ${email.trim()}\nTelefone: +55 ${telefoneVal}\nEmpresa: ${empresa.trim() || dash}\nColaboradores: ${colabVal}\nSite: ${siteVal}`

    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <Reveal>
            <div className="contact-copy">
              <div className="contact-copy__top">
                <p className="section__eyebrow">{t('contact.eyebrow')}</p>
                <span className="contact-badge">{t('contact.response')}</span>
              </div>

              <h1 className="contact-title" dangerouslySetInnerHTML={{ __html: t('contact.title') }} />

              <p className="contact-lead">{t('contact.lead')}</p>

              <div className="contact-stats">
                {STATS.map((s) => (
                  <div key={s.key} className="contact-stat">
                    <div className="contact-stat__num">{s.num}</div>
                    <div className="contact-stat__label">{t(s.key)}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal index={1}>
            <form className="contact-card" onSubmit={handleSubmit}>
              <p className="sr-only" aria-live="polite">{step === 1 ? t('contact.progress1') : t('contact.progress2')}</p>

              <div className="steps">
                <span className="steps__label">{step === 1 ? t('contact.progress1') : t('contact.progress2')}</span>
                <div className="steps__bar"><div className="steps__fill" style={{ '--p': step === 1 ? 0.5 : 1 }} /></div>
              </div>

              <p className="contact-card__title">{step === 1 ? t('contact.step1') : t('contact.step2')}</p>

              <motion.div key={step} variants={stepVariants} initial="initial" animate="animate" transition={stepTransition}>
                {step === 1 ? (
                  <>
                    <div className="field">
                      <label className="field__label" htmlFor="tipo">{t('contact.projectType')}<span className="field__req">*</span></label>
                      <Select
                        id="tipo"
                        value={tipo}
                        onChange={(v) => { setTipo(v); setErrors((e) => ({ ...e, tipo: undefined })) }}
                        options={tipoOptions}
                        placeholder={t('contact.select')}
                        required
                        invalid={!!errors.tipo}
                        ariaDescribedby={errors.tipo ? 'err-tipo' : undefined}
                      />
                      {errors.tipo && <span id="err-tipo" className="field__error" role="status">{errors.tipo}</span>}
                    </div>

                    <div className="field">
                      <label className="field__label" htmlFor="orcamento">{t('contact.budget')}</label>
                      <Select id="orcamento" value={orcamento} onChange={setOrcamento} options={orcOptions} placeholder={t('contact.select')} />
                    </div>

                    <div className="field">
                      <label className="field__label" htmlFor="prazo">{t('contact.deadline')}</label>
                      <Select id="prazo" value={prazo} onChange={setPrazo} options={prazoOptions} placeholder={t('contact.select')} />
                    </div>

                    <div className="field">
                      <label className="field__label" htmlFor="detalhes">{t('contact.details')}</label>
                      <textarea
                        id="detalhes"
                        className="textarea"
                        placeholder={t('contact.placeholder')}
                        maxLength={900}
                        value={detalhes}
                        onChange={(e) => setDetalhes(e.target.value)}
                      />
                      <span className="field__counter">{detalhes.length}/900</span>
                    </div>

                    <button ref={nextBtnRef} type="button" className="btn btn--primary w-full justify-center" onClick={goToStep2}>
                      {t('contact.next')} <span className="arrow" aria-hidden="true">→</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                      <div className="field sm:col-span-2">
                        <label className="field__label" htmlFor="nome">{t('contact.name')}<span className="field__req">*</span></label>
                        <input
                          ref={step2FirstRef}
                          id="nome"
                          className="input"
                          type="text"
                          placeholder={t('contact.namePh')}
                          value={nome}
                          aria-required="true"
                          aria-invalid={!!errors.nome}
                          aria-describedby={errors.nome ? 'err-nome' : undefined}
                          onChange={(e) => { setNome(e.target.value); setErrors((er) => ({ ...er, nome: undefined })) }}
                        />
                        {errors.nome && <span id="err-nome" className="field__error" role="status">{errors.nome}</span>}
                      </div>

                      <div className="field">
                        <label className="field__label" htmlFor="email">{t('contact.email')}<span className="field__req">*</span></label>
                        <input
                          id="email"
                          className="input"
                          type="email"
                          placeholder={t('contact.emailPh')}
                          value={email}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'err-email' : undefined}
                          onChange={(e) => { setEmail(e.target.value); setErrors((er) => ({ ...er, email: undefined })) }}
                        />
                        {errors.email && <span id="err-email" className="field__error" role="status">{errors.email}</span>}
                      </div>

                      <div className="field">
                        <label className="field__label" htmlFor="telefone">{t('contact.phone')}</label>
                        <div className="phone">
                          <span className="phone__prefix">🇧🇷 +55</span>
                          <input id="telefone" className="input" type="tel" inputMode="numeric" placeholder="(00) 00000-0000" value={telefone} onChange={(e) => setTelefone(maskBRPhone(e.target.value))} />
                        </div>
                      </div>

                      <div className="field">
                        <label className="field__label" htmlFor="empresa">{t('contact.company')}</label>
                        <input id="empresa" className="input" type="text" placeholder={t('contact.companyPh')} value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
                      </div>

                      <div className="field">
                        <label className="field__label" htmlFor="colab">{t('contact.team')}</label>
                        <Select id="colab" value={colab} onChange={setColab} options={teamOptions} placeholder={t('contact.select')} />
                      </div>

                      <div className="field sm:col-span-2">
                        <label className="field__label" htmlFor="site">{t('contact.website')}</label>
                        <input id="site" className="input" type="url" placeholder={t('contact.websitePh')} value={site} onChange={(e) => setSite(e.target.value)} />
                      </div>
                    </div>

                    <div className="form-nav">
                      <button type="button" className="btn btn--back" onClick={backToStep1}>← {t('contact.back')}</button>
                      <button type="submit" className="btn btn--primary flex-1 justify-center">
                        {t('contact.send')} <span className="arrow" aria-hidden="true">→</span>
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <Reveal>
            <p className="trust__num">{t('contact.trustLabel')}</p>
            <h2 className="trust__title">{t('contact.trustTitle')}</h2>
            <p className="trust__text">{t('contact.trustText')}</p>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <Reveal as="h2" className="cta__title">{t('contact.finalTitle')}</Reveal>
          <Reveal as="p" className="cta__text" index={1}>{t('contact.finalText')}</Reveal>
          <Reveal className="cta__actions" index={2}>
            <a href={WHATSAPP} className="btn btn--light" target="_blank" rel="noopener">
              {t('contact.finalBtn')}
            </a>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}