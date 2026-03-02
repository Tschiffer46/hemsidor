export default function OmOss() {
  return (
    <section id="om-oss" className="py-20 bg-h-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-h-dark text-center mb-4">
          Om oss
        </h2>
        <p className="text-h-mid text-center mb-14 max-w-2xl mx-auto">
          Agile Transition AB är ett konsultbolag med bas i södra Sverige. Vi hjälper
          organisationer att arbeta smartare – och nu hjälper vi också småföretag att
          synas online med professionella hemsidor.
        </p>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-8 text-center">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-h-teal flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            TS
          </div>
          <h3 className="text-xl font-semibold text-h-dark mb-1">Thomas Schiffer</h3>
          <p className="text-h-teal font-medium text-sm mb-4">Grundare, Agile Transition AB</p>
          <p className="text-h-mid text-sm leading-relaxed mb-6">
            Thomas har lång erfarenhet av digital produktutveckling och affärsutveckling.
            Han grundade Agile Transition AB med målet att göra professionell webbutveckling
            tillgänglig för alla företag – oavsett storlek.
          </p>
          <a
            href="https://www.linkedin.com/in/thomasschiffer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-h-teal text-h-teal hover:bg-h-teal hover:text-white font-medium rounded-lg text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
