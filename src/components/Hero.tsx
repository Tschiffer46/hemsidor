export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-h-teal-dark via-h-teal to-h-teal-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Din verksamhet förtjänar<br className="hidden sm:block" /> en modern hemsida
        </h1>
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10">
          Professionella hemsidor för småföretag – specialdesignade, snabba och
          hostade i Europa. Fast pris, ingen WordPress, leverans på 1–2 veckor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#erbjudande"
            className="px-8 py-4 bg-h-accent hover:bg-h-accent-dark text-white font-semibold rounded-xl text-lg transition-colors shadow-lg"
          >
            Se vårt erbjudande
          </a>
          <a
            href="#kontakt"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl text-lg transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
