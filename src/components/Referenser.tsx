const references = [
  {
    name: 'AZ Profil',
    url: 'https://azprofil.se',
    description: 'Profilkläder och trycksaker för företag.',
  },
  {
    name: 'ASP2B',
    url: 'https://asp2b.se',
    description: 'Affärsutveckling och coaching för småföretag.',
  },
]

export default function Referenser() {
  return (
    <section id="referenser" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-h-dark text-center mb-4">
          Referenser
        </h2>
        <p className="text-h-mid text-center mb-14 max-w-xl mx-auto">
          Här är några exempel på hemsidor vi har byggt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {references.map((ref) => (
            <a
              key={ref.name}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Besök ${ref.name} – kundexempel`}
              className="bg-h-light rounded-2xl p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="font-semibold text-h-dark text-lg mb-2 group-hover:text-h-teal transition-colors">
                {ref.name}
              </h3>
              <p className="text-h-mid text-sm leading-relaxed mb-3">{ref.description}</p>
              <span className="text-h-teal text-sm font-medium">{ref.url.replace('https://', '')}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
