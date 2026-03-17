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
          {/* <h2 className="about__heading reveal">
            <br />
            to <em>building code.</em>
          </h2> */}

          <div className="about__body">
            <p className="reveal reveal-delay-1">
              Hey — I'm <strong>Divya Natarajan</strong>, a software engineer based
              in <strong>Toronto</strong> who enjoys building reliable systems that power
              real-world operations.
            </p>
            <p className="reveal reveal-delay-2">
              With over a decade in <strong>Retail Banking and Fintech</strong>, I currently
              work as a <strong>Senior Payment Specialist</strong>, managing mission-critical
              financial systems daily. This hands-on experience with complex platforms operating
              at scale is what drove me to pursue software engineering
              through <strong>BrainStation</strong> — a deliberate step from managing
              the systems behind the modern economy to building them myself.
            </p>
            <p className="reveal reveal-delay-3">
              Today, I focus on full-stack development, clean architecture, and thoughtful
              user experiences. My background in financial operations shapes how I approach
              development: with a reliability-first mindset, strong attention to data integrity,
              and a commitment to building secure, resilient systems.
            </p>
            <p className="reveal reveal-delay-4">
              Outside of coding, I enjoy travelling, reading, and spending time with my pets —
              experiences that keep me curious and grounded, qualities I bring into the way
              I design and build technology.
            </p>
          </div>

          {/* Links */}
          <div className="about__links reveal reveal-delay-5">
            {[
              { label: 'GitHub', href: 'https://github.com/divyabeece23' },
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