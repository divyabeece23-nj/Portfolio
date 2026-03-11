import { useEffect, useRef } from 'react'
import './Hero.scss'

export default function Hero() {
  const nameRef = useRef(null)

  useEffect(() => {
    // Staggered letter reveal
    const el = nameRef.current
    if (!el) return
    const text = el.textContent
    el.innerHTML = text
      .split('')
      .map((ch, i) =>
        ch === ' '
          ? `<span style="display:inline-block;width:0.28em">&nbsp;</span>`
          : `<span class="hero__char" style="animation-delay:${0.06 + i * 0.055}s">${ch}</span>`
      )
      .join('')
  }, [])

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero__inner">

        {/* Eyebrow */}
        <p className="hero__eyebrow reveal">
          <span className="hero__eyebrow-line" />
          Available for work
        </p>

        {/* Name */}
        <h1 className="hero__name" ref={nameRef}>
          Divya Natarajan
        </h1>

        {/* Role line */}
        <div className="hero__role reveal reveal-delay-2">
          <span className="hero__role-tag">Full Stack</span>
          <span className="hero__role-sep">&</span>
          <span className="hero__role-tag">Software Engineer</span>
        </div>

        {/* Tagline */}
        <p className="hero__tagline reveal reveal-delay-3">
          I build clean, performant digital products<br />
          from idea to deployment.
        </p>

        {/* CTA row */}
        <div className="hero__cta reveal reveal-delay-4">
          <button className="hero__btn hero__btn--primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <button className="hero__btn hero__btn--ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in touch →
          </button>
        </div>

        {/* Scroll hint */}
        <button className="hero__scroll" onClick={scrollToAbout}>
          <span className="hero__scroll-line" />
          <span className="hero__scroll-label">Scroll</span>
        </button>
      </div>

      {/* Large decorative number */}
      <div className="hero__bg-num" aria-hidden="true">01</div>
    </section>
  )
}
