import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'

const WORD = ['K', 'I', 'P', 'P', 'O']

export default function Intro() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(true)
  const introRef = useRef(null)
  const logoRef = useRef(null)
  const finishedRef = useRef(false)
  const timersRef = useRef([])

  useEffect(() => {
    /* Respeita sessionStorage e prefers-reduced-motion */
    let alreadyPlayed = false
    try {
      alreadyPlayed = sessionStorage.getItem('kippo-intro') === 'done'
    } catch (e) {}

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (alreadyPlayed || reduceMotion) {
      setVisible(false)
      return
    }

    document.body.classList.add('is-intro')

    const clearTimers = () => {
      timersRef.current.forEach((id) => clearTimeout(id))
      timersRef.current = []
    }

    const finishIntro = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      try { sessionStorage.setItem('kippo-intro', 'done') } catch (e) {}
      try { window.dispatchEvent(new Event('kippo:intro-done')) } catch (e) {}
      const el = introRef.current
      if (el) el.classList.add('is-hidden')
      document.body.classList.remove('is-intro')
      timersRef.current.push(
        setTimeout(() => setVisible(false), 700)
      )
    }

    /* marca a logo como montada para o "respiro" antes de revelar */
    timersRef.current.push(
      setTimeout(() => {
        const logo = logoRef.current
        if (logo) logo.classList.add('is-assembled')
      }, 1600)
    )

    /* revela a página depois da animação */
    timersRef.current.push(setTimeout(finishIntro, 2100))

    /* permite pular com Esc ou clique no intro */
    const onKey = (e) => {
      if (e.key === 'Escape') finishIntro()
    }
    const onClick = () => finishIntro()
    document.addEventListener('keydown', onKey)
    const el = introRef.current
    if (el) el.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('keydown', onKey)
      if (el) el.removeEventListener('click', onClick)
      document.body.classList.remove('is-intro')
      clearTimers()
    }
  }, [])

  if (!visible) return null

  return (
    <div className="intro" id="intro" ref={introRef}>
      <div className="intro__glow" aria-hidden="true"></div>
      <div className="intro__logo" ref={logoRef}>
        <span className="intro__dot" aria-hidden="true"></span>
        <span className="intro__word" aria-hidden="true">
          {WORD.map((ch, i) => (
            <span key={i} className="intro__char" style={{ '--i': i }}>
              {ch}
            </span>
          ))}
        </span>
      </div>
      <button className="intro__skip" type="button">
        {t('intro.skip')}
      </button>
    </div>
  )
}