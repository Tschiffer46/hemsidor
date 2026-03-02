const inclusions = [
  'Upp till 5 specialdesignade sidor – varje sida unik, inga mallar',
  'Modern teknik (React/Vite) – snabb, säker och framtidssäkrad',
  '100% europeisk hosting (Hetzner, EU) – full GDPR-efterlevnad',
  'SSL-certifikat inkluderat',
  'Responsiv design – mobil, surfplatta och desktop',
  'Kontaktformulär',
  'Grundläggande cookiehantering för GDPR',
  '2–3 innehållsuppdateringar per år ingår i månadsavgiften',
  'Ytterligare uppdateringar kan köpas till löpande',
]

export default function Erbjudande() {
  return (
    <section id="erbjudande" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-h-dark text-center mb-4">
          Vårt erbjudande
        </h2>
        <p className="text-h-mid text-center mb-12 max-w-xl mx-auto">
          Ett komplett paket – allt du behöver för en professionell närvaro på nätet.
        </p>

        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          {/* Card header */}
          <div className="bg-gradient-to-r from-h-teal-dark to-h-teal px-8 py-8 text-white text-center">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-2">Webbpaketet</p>
            <div className="flex items-baseline justify-center gap-3 mb-1">
              <span className="text-4xl font-bold">6 995 kr</span>
              <span className="opacity-80">engångskostnad</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-2xl font-semibold">+ 495 kr/mån</span>
            </div>
            <p className="text-sm opacity-70 mt-1">drift, support &amp; uppdateringar</p>
          </div>

          {/* Card body */}
          <div className="bg-white px-8 py-8">
            <ul className="space-y-3 mb-8">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-h-mid">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-h-mid text-sm mb-6 bg-h-light rounded-lg px-4 py-3">
              <span>⏱</span>
              <span>Leveranstid: <strong className="text-h-dark">1–2 veckor</strong> från godkänt innehåll</span>
            </div>

            <a
              href="#kontakt"
              className="block w-full text-center px-6 py-4 bg-h-accent hover:bg-h-accent-dark text-white font-semibold rounded-xl text-lg transition-colors"
            >
              Kom igång
            </a>

            <p className="text-center text-sm text-h-mid mt-4 opacity-70">
              Vi har redan levererat sajter till{' '}
              <a href="https://azprofil.agiletransition.se" target="_blank" rel="noopener noreferrer" className="underline hover:text-h-teal">
                azprofil.agiletransition.se
              </a>{' '}
              och{' '}
              <a href="https://azp2b.agiletransition.se" target="_blank" rel="noopener noreferrer" className="underline hover:text-h-teal">
                azp2b.agiletransition.se
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
