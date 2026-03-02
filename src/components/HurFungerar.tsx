const steps = [
  {
    number: 1,
    icon: '💬',
    title: 'Kontakt',
    description: 'Vi pratar om din verksamhet, dina mål och vad du vill kommunicera. Inget tekniskt krångel.',
  },
  {
    number: 2,
    icon: '✏️',
    title: 'Design & innehåll',
    description: 'Du levererar text och bilder (eller vi hjälper dig). Vi sätter ihop ett förslag på layout.',
  },
  {
    number: 3,
    icon: '⚙️',
    title: 'Utveckling',
    description: 'Vi bygger din sajt med modern teknik – snabb, säker och mobilanpassad från grunden.',
  },
  {
    number: 4,
    icon: '🚀',
    title: 'Lansering & drift',
    description: 'Din sajt går live på din domän. Vi sköter hosting, SSL och löpande uppdateringar.',
  },
]

export default function HurFungerar() {
  return (
    <section id="hur-fungerar-det" className="py-20 bg-h-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-h-dark text-center mb-4">
          Så fungerar det
        </h2>
        <p className="text-h-mid text-center mb-14 max-w-xl mx-auto">
          Från första kontakt till färdig hemsida – enkelt och smidigt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-h-teal/20 z-0" />
              )}
              <div className="relative z-10 w-16 h-16 rounded-full bg-h-teal flex items-center justify-center text-white font-bold text-xl shadow-md mb-4">
                {step.number}
              </div>
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-semibold text-h-dark text-lg mb-2">{step.title}</h3>
              <p className="text-h-mid text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
