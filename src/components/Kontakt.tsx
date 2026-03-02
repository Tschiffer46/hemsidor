import { useState, FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Kontakt() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xreawgqr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-20 bg-gradient-to-br from-h-teal-dark to-h-teal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Kontakta oss
        </h2>
        <p className="text-white/80 text-center mb-12 max-w-xl mx-auto">
          Berätta om din verksamhet – vi svarar normalt inom 24 timmar.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-h-dark mb-2">Tack för ditt meddelande!</h3>
              <p className="text-h-mid">Vi återkommer till dig inom 24 timmar.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="namn" className="block text-sm font-medium text-h-dark mb-1">
                    Namn <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="namn"
                    name="namn"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-h-dark focus:outline-none focus:ring-2 focus:ring-h-teal"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label htmlFor="foretag" className="block text-sm font-medium text-h-dark mb-1">
                    Företag
                  </label>
                  <input
                    id="foretag"
                    name="foretag"
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-h-dark focus:outline-none focus:ring-2 focus:ring-h-teal"
                    placeholder="Ditt företag"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="epost" className="block text-sm font-medium text-h-dark mb-1">
                    E-post <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="epost"
                    name="epost"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-h-dark focus:outline-none focus:ring-2 focus:ring-h-teal"
                    placeholder="din@epost.se"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-h-dark mb-1">
                    Telefon
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-h-dark focus:outline-none focus:ring-2 focus:ring-h-teal"
                    placeholder="070-000 00 00"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="meddelande" className="block text-sm font-medium text-h-dark mb-1">
                  Meddelande <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="meddelande"
                  name="meddelande"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-h-dark focus:outline-none focus:ring-2 focus:ring-h-teal resize-none"
                  placeholder="Berätta om din verksamhet och vad du behöver..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">
                  Något gick fel. Försök igen om en liten stund.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-h-accent hover:bg-h-accent-dark disabled:opacity-60 text-white font-semibold rounded-xl text-lg transition-colors"
              >
                {status === 'submitting' ? 'Skickar...' : 'Skicka meddelande'}
              </button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center text-sm text-h-mid">
            <span>Vi svarar normalt inom 24 timmar</span>
          </div>
        </div>
      </div>
    </section>
  )
}
