import useScrollReveal from '../../hooks/useScrollReveal'
import './About.scss'

const STATS = [
  { val: '6mo', label: 'Coding journey' },
  { val: '2+',  label: 'Projects shipped' },
  { val: '10+', label: 'Technologies learned' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__inner">

        {/* Left — sticky label + image */}
        <div className="about__left">
          <p className="section-label reveal">About</p>

          <div className="about__img-wrap reveal reveal-delay-1">
            {/* Replace with your photo: <img src="/photo.jpg" alt="Divya Natarajan" /> */}
            <div className="about__img-placeholder">
              <span>DN</span>
            </div>
            <div className="about__img-tag">
              <span className="about__img-tag-dot" />
              Open to opportunities
            </div>
          </div>

          {/* Stats */}
          <div className="about__stats">
            {STATS.map(({ val, label }, i) => (
              <div key={label} className={`about__stat reveal reveal-delay-${i + 2}`}>
                <span className="about__stat-val">{val}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — content */}
        <div className="about__right">
          <h2 className="about__heading reveal">
            A developer who cares<br />
            about the <em>craft.</em>
          </h2>

          <div className="about__body">
            <p className="reveal reveal-delay-1">
              Hey — I'm <strong>Divya Natarajan</strong>, a full-stack software engineer
              based in <strong>Toronto, Canada</strong>. I started my coding journey in September 2025
              through BrainStation's Software Engineering Bootcamp — and in just 6 months
              I've gone from zero to building and deploying full-stack applications.
            </p>
            <p className="reveal reveal-delay-2">
              I care about clean architecture, thoughtful UX, and code that actually lasts.
              Outside of code you'll find me travelling, listening to music, reading,
              watching movies, or spending time with my pets —
              experiences I believe make engineers more empathetic builders.
            </p>
          </div>

          {/* Links */}
          <div className="about__links reveal reveal-delay-3">
            {[
              { label: 'GitHub',   href: 'https://github.com/divyabeece23' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/divyabeece23' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="about__link">
                {label}
                <span className="about__link-arrow">↗</span>
              </a>
            ))}
            <a href="/resume.pdf" download className="about__link about__link--accent">
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}