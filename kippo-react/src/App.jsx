import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatWhats from './components/FloatWhats'
import AnimatedRoutes from './components/AnimatedRoutes'

/** Rola até a âncora (#id) quando a rota muda, ou até o topo caso não haja hash.
 *  Com AnimatePresence mode="wait", a nova página monta após a saída da anterior,
 *  então fazemos um polling curto aguardando o elemento existir. */
function HashScroll() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const targetId = hash.replace('#', '')
      let tries = 0
      const tryScroll = () => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return
        }
        if (tries++ < 40) requestAnimationFrame(tryScroll)
      }
      tryScroll()
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatWhats />
      <HashScroll />
    </>
  )
}