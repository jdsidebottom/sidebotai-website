import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Breathing room between the fixed header and the anchored section
const SCROLL_MARGIN = 16

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)

      if (element) {
        const header = document.querySelector('header')
        const offset = (header?.offsetHeight ?? 0) + SCROLL_MARGIN
        const top = element.getBoundingClientRect().top + window.scrollY - offset

        window.scrollTo({ top, behavior: 'smooth' })
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
