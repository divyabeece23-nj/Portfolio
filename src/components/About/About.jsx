import useScrollReveal from '../../hooks/useScrollReveal'
import './About.scss'

const STATS = [
  { val: '10+', label: 'Years in Banking & Fintech' },
  { val: '10+', label: 'Technologies learned' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__inner">

        {/* Left — label + stats */}
        <div className="about__left">
          <p className="section-label reveal">About</p>

          {/* Stats */}
          <div className="about__stats">
            {STATS.map(({ val, label }, i) => (
              <div key={label} className={`about__stat reveal reveal-delay-${i + 2}`}>
                <span className="about__stat-val">{val}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>

          {/* Moved below stats */}
          <div className="about__img-tag reveal reveal-delay-1">
            <span className="about__img-tag-dot" />
            Open to opportunities
          </div>
        </div>


        {/* Right — content */}
        <div className="about__right">
          {<h2 className="about__heading reveal">
            Operations to<br />
            <em>engineering.</em>
          </h2> }

          <div className="about__body">
            <p className="reveal reveal-delay-1">
              Hey — I'm <strong>Divya Natarajan</strong>, a full-stack software engineer based in Toronto, currently training at BrainStation with a focus on clean architecture, reliable systems, and thoughtful user experiences. I bring over a decade of experience in Retail Banking and Fintech, most recently as a Senior Payment Specialist managing mission-critical financial platforms at scale. That hands-on work with complex systems is what drove me to make the leap from managing technology to building it. Outside of coding, I enjoy travelling, reading, and spending time with my pets — experiences that keep me curious and grounded.
            </p>
          </div>

          {/* Links */}
          <div className="about__links reveal reveal-delay-5">
            {[
              { label: 'GitHub', href: 'https://github.com/divyabeece23-nj' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/divyanat/' },
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
    </section >
  )
}