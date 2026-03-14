const packages = [
  {
    name: 'Webbpaketet',
    price: '6 995 kr',
    monthly: '495 kr/mån',
    delivery: '1–2 veckor',
    highlighted: false,
    features: [
      'Upp till 5 specialdesignade sidor – varje sida unik, inga mallar',
      'Modern teknik (React/Vite) – snabb, säker och framtidssäkrad',
      '100% europeisk hosting (Hetzner, EU) – full GDPR-efterlevnad',
      'SSL-certifikat inkluderat',
      'Responsiv design – mobil, surfplatta och desktop',
      'Kontaktformulär',
      'Grundläggande cookiehantering för GDPR',
      '2–3 innehållsuppdateringar per år ingår i månadsavgiften',
      'Ytterligare uppdateringar kan köpas till löpande',
    ],
  },
  {
    name: 'Webbpaketet Pro',
    badge: 'Populärast',
    price: '19 995 kr',
    monthly: '795 kr/mån',
    delivery: '2–3 veckor',
    highlighted: true,
    features: [
      'Upp till 10 specialdesignade sidor – varje sida unik, inga mallar',
      'Modern teknik (React/Vite) – snabb, säker och framtidssäkrad',
      '100% europeisk hosting (Hetzner, EU) – full GDPR-efterlevnad',
      'SSL-certifikat inkluderat',
      'Responsiv design – mobil, surfplatta och desktop',
      'Avancerade kontakt- och offertformulär',
      'Grundläggande cookiehantering för GDPR',
      'SEO-optimering – synlighet i Google från dag ett',
      '4 timmars webbanalys & rapportering – vi analyserar trafik och ger konkreta förbättringsförslag',
      'Interaktiva sektioner – bildgalleri, animationer, FAQ-accordion',
      '5 innehållsuppdateringar per år ingår i månadsavgiften',
      'Prioriterad support med snabbare svarstid',
    ],
  },
]

export default function Erbjudande() {
  return (
    <section id="erbjudande" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-h-dark text-center mb-4">
          Vårt erbjudande
        </h2>
        <p className="text-h-mid text-center mb-12 max-w-2xl mx-auto">
          Välj det paket som passar din verksamhet – från grundläggande närvaro till avancerad digital satsning.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl overflow-hidden shadow-xl border flex flex-col ${
                pkg.highlighted
                  ? 'ring-2 ring-h-accent border-h-accent/20'
                  : 'border-gray-100'
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-h-accent text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
                  {pkg.badge}
                </div>
              )}

              {/* Card header */}
              <div className={`px-8 py-8 text-white text-center ${
                pkg.highlighted
                  ? 'bg-gradient-to-r from-h-teal-dark via-h-teal to-h-teal-light'
                  : 'bg-gradient-to-r from-h-teal-dark to-h-teal'
              }`}>
                <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-2">
                  {pkg.name}
                </p>
                <div className="flex items-baseline justify-center gap-3 mb-1">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="opacity-80">+ moms</span>
                </div>
                <p className="text-xs opacity-70 mb-3">engångskostnad</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-semibold">+ {pkg.monthly}</span>
                </div>
                <p className="text-sm opacity-70 mt-1">
                  + moms för drift, support &amp; uppdateringar
                </p>
              </div>

              {/* Card body */}
              <div className="bg-white px-8 py-8 flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-h-mid text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-h-mid text-sm mb-6 bg-h-light rounded-lg px-4 py-3">
                  <span>⏱</span>
                  <span>
                    Leveranstid:{' '}
                    <strong className="text-h-dark">{pkg.delivery}</strong> från
                    godkänt innehåll
                  </span>
                </div>

                <a
                  href="#kontakt"
                  className={`block w-full text-center px-6 py-4 font-semibold rounded-xl text-lg transition-colors ${
                    pkg.highlighted
                      ? 'bg-h-accent hover:bg-h-accent-dark text-white'
                      : 'bg-h-teal hover:bg-h-teal-dark text-white'
                  }`}
                >
                  Kom igång
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-h-mid mt-8 opacity-70">
          Vi har redan levererat sajter till{' '}
          <a
            href="https://azprofil.agiletransition.se"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-h-teal"
          >
            azprofil.agiletransition.se
          </a>{' '}
          och{' '}
          <a
            href="https://azp2b.agiletransition.se"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-h-teal"
          >
            azp2b.agiletransition.se
          </a>
        </p>
      </div>
    </section>
  )
}
