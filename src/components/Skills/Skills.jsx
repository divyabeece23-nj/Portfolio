import useScrollReveal from '../../hooks/useScrollReveal'
import './Skills.scss'

const CATEGORIES = [
  {
    label: 'Frontend',
    items: ['HTML', 'CSS / SASS', 'JavaScript', 'React', 'Responsive Design', 'Typescript'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git / GitHub', 'Figma', 'Vite', 'Vercel', 'Render'],
  },
  {
    label: 'Currently Exploring',
    items: ['Next.js', 'Tailwind CSS', 'Docker', 'PostgreSQL'],
    exploring: true,
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills__inner">
        <div className="skills__header">
          <p className="section-label reveal">Skills</p>
          <h2 className="skills__heading reveal reveal-delay-1">
            Technologies I <em>work with</em>
          </h2>
          <p className="skills__sub reveal reveal-delay-2">
            Tools I reach for daily — and what I'm learning next.
          </p>
        </div>

        <div className="skills__grid">
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.label}
              className={`skills__cat reveal reveal-delay-${ci + 1} ${cat.exploring ? 'skills__cat--explore' : ''}`}
            >
              <h3 className="skills__cat-label">
                {cat.exploring && <span className="skills__explore-dot" />}
                {cat.label}
              </h3>
              <ul className="skills__list">
                {cat.items.map(item => (
                  <li key={item} className="skills__item">
                    <span className="skills__item-bullet" />
                    {item}
                    {cat.exploring && <span className="skills__item-badge">learning</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
