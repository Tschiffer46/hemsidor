const usps = [
  {
    icon: '🎯',
    title: 'Specialdesignat, inte mallar',
    description:
      'Varje hemsida byggs unik för din verksamhet. Inget WordPress, inga trötta teman – bara ren, skräddarsydd kod.',
  },
  {
    icon: '🇪🇺',
    title: '100% europeisk hosting',
    description:
      'Dina data och din sajt hostas hos Hetzner i Europa. Full GDPR-efterlevnad och inga transatlantiska dataöverföringar.',
  },
  {
    icon: '⚡',
    title: 'Snabb och effektiv leverans',
    description:
      'Från första möte till färdig sajt på 1–2 veckor. Vi är ett litet, rörligt team utan onödig byråkrati.',
  },
  {
    icon: '💰',
    title: 'Fast pris, inga överraskningar',
    description:
      'Du vet exakt vad du betalar – engångskostnad för bygget och en fast månadsavgift för drift och support.',
  },
  {
    icon: '🤝',
    title: 'Affärserfarenhet',
    description:
      'Vi förstår att en hemsida är ett affärsverktyg. Vi fokuserar på det som faktiskt hjälper din verksamhet att växa.',
  },
]

export default function VarforOss() {
  return (
    <section id="varfor-oss" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-h-dark text-center mb-4">
          Varför välja oss?
        </h2>
        <p className="text-h-mid text-center mb-14 max-w-xl mx-auto">
          Vi är inte en stor byrå. Vi är ett litet, engagerat team som bryr oss om ditt resultat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="bg-h-light rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{usp.icon}</div>
              <h3 className="font-semibold text-h-dark text-lg mb-2">{usp.title}</h3>
              <p className="text-h-mid text-sm leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
