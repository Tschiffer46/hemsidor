import Nav from './components/Nav'
import Hero from './components/Hero'
import Erbjudande from './components/Erbjudande'
import HurFungerar from './components/HurFungerar'
import VarforOss from './components/VarforOss'
import OmOss from './components/OmOss'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Erbjudande />
        <HurFungerar />
        <VarforOss />
        <OmOss />
        <Kontakt />
      </main>
      <Footer />
    </div>
  )
}

export default App
