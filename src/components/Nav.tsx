import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Erbjudande', href: '#erbjudande' },
    { label: 'Så fungerar det', href: '#hur-fungerar-det' },
    { label: 'Varför oss', href: '#varfor-oss' },
    { label: 'Om oss', href: '#om-oss' },
    { label: 'Referenser', href: '#referenser' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className={`font-bold text-lg ${scrolled ? 'text-h-teal' : 'text-white'}`}
          >
            Agile Transition | Hemsidor
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-h-teal ${
                  scrolled ? 'text-h-mid' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-2 px-4 py-2 bg-h-accent hover:bg-h-accent-dark text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Kontakta oss
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden p-2 rounded ${scrolled ? 'text-h-mid' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Öppna meny"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-h-mid font-medium hover:text-h-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2 bg-h-accent hover:bg-h-accent-dark text-white text-sm font-semibold rounded-lg text-center transition-colors"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
