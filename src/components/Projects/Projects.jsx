import { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Projects.scss'

const PROJECTS = [
  {
    num: '01',
    title: 'ReelReads',
    subtitle: 'Full Stack · Movie Reviews',
    year: '2025',
    tags: ['React', 'Node.js', 'MongoDB', 'OMDb API', 'JWT'],
    summary: 'A movie discovery and review platform — search millions of movies, save favourites, rate and review. Features curated trending sections with genre filtering.',
    caseStudy: {
      ask: 'Wanted to build a full-stack app that lets users discover movies, save favourites, and share reviews — something beyond a basic CRUD project with real authentication, external APIs, and a polished UI.',
      delivered: 'Full-stack app with React frontend and Node/Express API backed by MongoDB. JWT authentication with bcrypt password hashing, email verification, and password reset via Nodemailer. Integrated OMDb API for movie data and built a custom trending system with genre filtering and a rotating "Movie of the Day" feature. Deployed frontend on Vercel and backend on Render with auto-deploy from GitHub.',
      knownAhead: ['React', 'Node.js / Express', 'MongoDB / Mongoose', 'REST API design'],
      hadToLearn: ['JWT authentication flow', 'OMDb API integration', 'CORS with Vercel preview deployments', 'Email verification with crypto tokens', 'SCSS design systems with variables and mixins'],
      nextSteps: ['Add TMDB API for better discovery', 'Watchlist statuses (Watched / Want to Watch)', 'Personal stats dashboard', 'Social features — follow users and review feeds'],
    },
    github: 'https://github.com/divyabeece23-nj/Movie-Book-App-Frontend.git',
    githubBackend: 'https://github.com/divyabeece23-nj/Movie-Book-App-Backend.git',
    live: 'https://reelreads-app.vercel.app',
  },
  
  {
    num: '02',
    title: 'Eventure',
    subtitle: 'Full Stack · Event Management',
    year: '2024',
    tags: ['React', 'Node.js', 'Express'],
    summary: 'An event registration platform where users can browse upcoming events throughout the year, register for ones they\'re interested in, and manage their registrations.',
    caseStudy: {
      ask: 'BrainStation project — build an event management platform that handles user registration for various events, with the ability to register and cancel registrations.',
      delivered: 'Full-stack event platform with React frontend and Node/Express backend. Users can browse events, register with one click, and cancel their registrations. Clean UI showing event details, dates, and registration status.',
      knownAhead: ['React', 'JavaScript', 'HTML/CSS'],
      hadToLearn: ['Node.js / Express backend', 'API routing and middleware', 'State management for registration flows'],
      nextSteps: ['Add a database for persistent storage', 'User authentication', 'Event filtering by category and date', 'Email confirmations on registration'],
    },
    github: 'https://github.com/divyabeece23-nj/Eventure-1.git',
    githubBackend: 'https://github.com/divyabeece23-nj/Eventure-3-api.git',
    live: null,
  },
  {
    num: '04',
    title: 'This Portfolio',
    subtitle: 'React · Personal Brand',
    year: '2025',
    tags: ['React', 'Framer Motion', 'SCSS', 'Vite'],
    summary: 'This site — built to be a demonstration of craft in itself. Clean architecture, smooth animations, no template.',
    caseStudy: {
      ask: 'Build a portfolio that is itself one of the projects it showcases. Requirements: cover all professional content, be visually distinctive, use modern React patterns.',
      delivered: 'Component-based React app with SCSS modules, custom cursor, scroll-reveal animations, and a full case study system.',
      knownAhead: ['React', 'SCSS', 'CSS animations'],
      hadToLearn: ['Framer Motion layoutId pitfalls', 'Magnetic cursor physics', 'IntersectionObserver patterns'],
      nextSteps: ['Blog via headless CMS', 'Reduced-motion support', 'Improve mobile layout'],
    },
    github: 'https://github.com/divyabeece23-nj/Portfolio.git',
    live: 'https://divya-natarajan.vercel.app/',
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
            {project.githubBackend && project.githubBackend !== '#' && (
              <a href={project.githubBackend} target="_blank" rel="noreferrer" className="modal__btn modal__btn--dark">
                Backend Repo ↗
              </a>
            )}
            {project.live && project.live !== '#' && (
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