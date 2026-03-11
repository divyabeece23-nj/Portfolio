import { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Projects.scss'

const PROJECTS = [
  {
    num: '01',
    title: 'Project One',
    subtitle: 'Full Stack · E-Commerce',
    year: '2024',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    summary: 'Custom B2B storefront replacing a legacy Shopify setup. Complex role-based pricing, sub-1s LCP on all product pages.',
    caseStudy: {
      ask: 'A client needed a custom storefront with B2B pricing logic their existing Shopify plan could not support. The ask: rebuild from scratch, keep it fast, and make it maintainable.',
      delivered: 'Full-stack app — React frontend, Node/Express API, PostgreSQL. Stripe integration with webhook retry logic and idempotency keys. Deployed on AWS with a CDN layer for static assets.',
      knownAhead: ['React', 'Node.js', 'REST API design', 'PostgreSQL'],
      hadToLearn: ['Stripe Webhooks & idempotency', 'AWS S3 image storage', 'Server-side rendering for SEO'],
      nextSteps: ['Migrate to Next.js App Router', 'Add a product recommendation engine', 'Real-time inventory via WebSockets'],
    },
    github: '#',
    live: '#',
  },
  {
    num: '02',
    title: 'Project Two',
    subtitle: 'Dashboard · Analytics',
    year: '2023',
    tags: ['TypeScript', 'D3.js', 'Python', 'FastAPI'],
    summary: 'Data visualisation dashboard aggregating metrics from 4 API sources for a marketing team. Near real-time, fully accessible.',
    caseStudy: {
      ask: 'Marketing team drowning in spreadsheets needed one dashboard across 4 analytics platforms — with KPIs, trends and anomaly highlights.',
      delivered: 'D3.js dashboard with a Python/FastAPI aggregation layer. All charts have ARIA labels and keyboard-navigable table fallbacks.',
      knownAhead: ['TypeScript', 'React', 'API integration', 'Accessibility basics'],
      hadToLearn: ['D3.js data joins (entirely new)', 'FastAPI', 'Responsive SVG techniques'],
      nextSteps: ['WebSocket live updates', 'Shareable filter state in the URL', 'White-label theming'],
    },
    github: '#',
    live: null,
  },
  {
    num: '03',
    title: 'Project Three',
    subtitle: 'CLI Tool · Developer Tooling',
    year: '2023',
    tags: ['Python', 'OpenAI API', 'Docker', 'Click'],
    summary: 'AI-powered CLI that automates PR descriptions, commit messages and pre-review checks using LLM context of the diff.',
    caseStudy: {
      ask: 'A personal productivity problem: writing the same types of PR descriptions repeatedly. Wanted a one-command shortcut that understood the codebase context.',
      delivered: 'pip-installable CLI with streaming output, TOML config with sane defaults, and diff-aware prompts that outperform naive approaches.',
      knownAhead: ['Python', 'Click CLI framework', 'OpenAI API basics'],
      hadToLearn: ['Docker multi-stage builds', 'Streaming LLM responses to terminal', 'TOML config schema validation'],
      nextSteps: ['Plugin architecture', 'Ollama support for local models', 'Publish to PyPI + Homebrew tap'],
    },
    github: '#',
    live: null,
  },
  {
    num: '04',
    title: 'This Portfolio',
    subtitle: 'React · Personal Brand',
    year: '2024',
    tags: ['React', 'Framer Motion', 'SCSS', 'Vite'],
    summary: 'This site — built to be a demonstration of craft in itself. Clean architecture, smooth animations, no template.',
    caseStudy: {
      ask: 'Build a portfolio that is itself one of the projects it showcases. Requirements: cover all professional content, be visually distinctive, use modern React patterns.',
      delivered: 'Component-based React app with SCSS modules, custom cursor, scroll-reveal animations, and a full case study system.',
      knownAhead: ['React', 'SCSS', 'CSS animations'],
      hadToLearn: ['Framer Motion layoutId pitfalls', 'Magnetic cursor physics', 'IntersectionObserver patterns'],
      nextSteps: ['Blog via headless CMS', 'Reduced-motion support', 'Improve mobile layout'],
    },
    github: '#',
    live: '#',
  },
]

function CaseStudyModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <div>
            <p className="modal__num">{project.num}</p>
            <h3 className="modal__title">{project.title}</h3>
            <p className="modal__sub">{project.subtitle} · {project.year}</p>
          </div>
          <button className="modal__close" onClick={onClose}>✕</button>
        </div>

        <div className="modal__body">
          <div className="modal__block">
            <h4>The Ask</h4>
            <p>{project.caseStudy.ask}</p>
          </div>
          <div className="modal__block">
            <h4>What I Delivered</h4>
            <p>{project.caseStudy.delivered}</p>
          </div>

          <div className="modal__two-col">
            <div className="modal__block">
              <h4>Knew Ahead</h4>
              <ul>
                {project.caseStudy.knownAhead.map(t => (
                  <li key={t}><span className="modal__check">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="modal__block">
              <h4>Had to Learn</h4>
              <ul>
                {project.caseStudy.hadToLearn.map(t => (
                  <li key={t}><span className="modal__arrow">→</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="modal__block">
            <h4>Next Steps</h4>
            <ul>
              {project.caseStudy.nextSteps.map(s => (
                <li key={s}><span className="modal__arrow">→</span>{s}</li>
              ))}
            </ul>
          </div>

          <div className="modal__tags">
            {project.tags.map(t => <span key={t} className="modal__tag">{t}</span>)}
          </div>

          <div className="modal__footer">
            <a href={project.github} target="_blank" rel="noreferrer" className="modal__btn modal__btn--dark">
              GitHub ↗
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="modal__btn modal__btn--ghost">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)
  const ref = useScrollReveal()

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects__inner">
        <div className="projects__header">
          <p className="section-label reveal">Projects</p>
          <h2 className="projects__heading reveal reveal-delay-1">
            Selected <em>work</em>
          </h2>
          <p className="projects__sub reveal reveal-delay-2">
            A curated set of things I've shipped — click any project for the full case study.
          </p>
        </div>

        <div className="projects__list">
          {PROJECTS.map((project, i) => (
            <div
              key={project.num}
              className={`proj-row reveal reveal-delay-${i + 1}`}
              onClick={() => setActive(project)}
              data-cursor
            >
              <span className="proj-row__num">{project.num}</span>

              <div className="proj-row__info">
                <h3 className="proj-row__title">{project.title}</h3>
                <p className="proj-row__summary">{project.summary}</p>
              </div>

              <div className="proj-row__tags">
                {project.tags.slice(0, 3).map(t => (
                  <span key={t} className="proj-row__tag">{t}</span>
                ))}
              </div>

              <div className="proj-row__meta">
                <span className="proj-row__year">{project.year}</span>
                <span className="proj-row__cta">Case Study →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <CaseStudyModal project={active} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
