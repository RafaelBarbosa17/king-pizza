import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Local from './components/local/Local'
import Carte from './components/carte/Carte'
import AboutUs from './components/about/AboutUs'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <div id="App">
      {/* <div 
        className="bg-orange border-black uppercase text-black font-bold px-4"
      >
        Site em Desenvolvimento
      </div> */}
      <Header />
      <Banner />
      <Carte />
      <Local />
      <AboutUs />
      <Footer />
    </div>
  )
}
