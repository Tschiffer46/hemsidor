export default function Footer() {
  return (
    <footer className="bg-h-dark text-white/70 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <span className="font-semibold text-white">Agile Transition | Hemsidor</span>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://www.agiletransition.se"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              agiletransition.se
            </a>
            <a
              href="mailto:thomas@agiletransition.se"
              className="hover:text-white transition-colors"
            >
              thomas@agiletransition.se
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>© 2026 Agile Transition AB</span>
          <p className="text-xs text-white/50 max-w-md text-center sm:text-right">
            Vi samlar inte in personuppgifter utöver vad du frivilligt uppger i kontaktformuläret.
            Uppgifterna används enbart för att svara på din förfrågan och delas inte med tredje part.
            Hostar vi din sajt lagras ditt innehåll på Hetzner-servrar i EU.
          </p>
        </div>
      </div>
    </footer>
  )
}
