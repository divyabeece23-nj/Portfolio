import { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Contact.scss'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const ref = useScrollReveal()

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Hook up to Formspree: fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form) })
    setSent(true)
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__inner">

        {/* Left — info */}
        <div className="contact__left">
          <p className="section-label reveal">Contact</p>
          <h2 className="contact__heading reveal reveal-delay-1">
            Let's build<br />
            something<br />
            <em>together.</em>
          </h2>

          <p className="contact__sub reveal reveal-delay-2">
            Have a project in mind, a role to fill, or just want to say hi?
            My inbox is always open.
          </p>

          <a
            href="mailto:you@email.com"
            className="contact__email reveal reveal-delay-3"
          >
            divyabeece23@gmail.com
          </a>

          <div className="contact__socials reveal reveal-delay-4">
            {[
              { label: 'GitHub', href: 'https://github.com/divyabeece23-nj' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/divyanat/' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__social">
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact__right reveal reveal-delay-2">
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out — I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__fields">
                <div className="contact__field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact__field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, role, or idea..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="contact__submit">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
