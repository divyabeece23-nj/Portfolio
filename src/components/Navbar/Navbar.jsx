import { useState, useEffect } from 'react'
import './Navbar.scss'

const LINKS = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          DN<span className="navbar__dot">.</span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((l, i) => (
            <button key={l} className="navbar__link" onClick={() => scrollTo(l)}>
              <span className="navbar__link-num">0{i + 1}</span>
              {l}
            </button>
          ))}
          <a href="/resume.pdf" download className="navbar__resume">
            Resume ↓
          </a>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {LINKS.map((l, i) => (
          <button key={l} className="navbar__mobile-link" onClick={() => scrollTo(l)}>
            <span className="navbar__mobile-num">0{i + 1}</span>
            {l}
          </button>
        ))}
        <a href="/resume.pdf" download className="navbar__mobile-resume">Resume ↓</a>
      </div>
    </header>
  )
}
