import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'
import pt from './pt.json'
import en from './en.json'

const DICTS = { pt, en }
const STORAGE_KEY = 'kippo-lang'

const LanguageContext = createContext(null)

function detectInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch (e) {}
  try {
    if ((navigator.language || 'pt').slice(0, 2) === 'en') return 'en'
  } catch (e) {}
  return 'pt'
}

function setMeta(selector, attr, content) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, content)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang)

  const setLang = useCallback((next) => {
    setLangState(next)
    try { localStorage.setItem(STORAGE_KEY, next) } catch (e) {}
  }, [])

  // Apenas o atributo lang do <html>. O <title> e metadados são definidos
  // por cada página (Home/ProjectDetail) — evita conflito de ordem de effects
  // e permite título/descrição específicos por página (melhor SEO).
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }, [lang])

  // t(key) — retorna a string no idioma atual (fallback PT)
  const t = useCallback((key) => {
    const dict = DICTS[lang] || DICTS.pt
    return dict[key] != null ? dict[key] : DICTS.pt[key] != null ? DICTS.pt[key] : key
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n deve ser usado dentro de <LanguageProvider>')
  return ctx
}