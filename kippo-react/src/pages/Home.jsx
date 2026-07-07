import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import Intro from '../components/Intro'
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'
import Services from '../components/Services'
import Tech from '../components/Tech'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const pageTransition = { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }

function setMeta(selector, attr, content) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, content)
}

export default function Home() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = t('_title')
    setMeta('meta[name="description"]', 'content', t('_desc'))
    setMeta('meta[property="og:title"]', 'content', t('_ogTitle'))
    setMeta('meta[property="og:description"]', 'content', t('_ogDesc'))
    setMeta('meta[property="og:locale"]', 'content', t('_ogLocale'))
  }, [t])

  return (
    <>
      <Intro />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Hero />
        <LogoCloud />
        <Portfolio />
        <Services />
        <Tech />
        <Testimonials />
        <CTA />
      </motion.div>
    </>
  )
}