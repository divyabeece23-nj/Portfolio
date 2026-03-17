import './Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          DN<span className="footer__dot">.</span>
        </div>

        <p className="footer__copy">
          © {year} Divya Natarajan ·
        </p>

        <div className="footer__links">
          {['GitHub', 'LinkedIn'].map(l => (
            <a key={l} href="#" target="_blank" rel="noreferrer" className="footer__link">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
