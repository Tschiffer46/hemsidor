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
          <div className="w-20 h-20 rounded-full bg-h-teal flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            AT
          </div>
          <h3 className="text-xl font-semibold text-h-dark mb-1">Agile Transition AB</h3>
          <p className="text-h-teal font-medium text-sm mb-4">Södra Sverige</p>
          <p className="text-h-mid text-sm leading-relaxed mb-6">
            Vi har lång erfarenhet av digital produktutveckling och affärsutveckling.
            Vårt mål är att göra professionell webbutveckling tillgänglig för alla
            företag – oavsett storlek.
          </p>
          <a
            href="https://www.agiletransition.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-h-teal text-h-teal hover:bg-h-teal hover:text-white font-medium rounded-lg text-sm transition-colors"
          >
            agiletransition.se
          </a>
        </div>
      </div>
    </section>
  )
}
