
import Header from "./components/header/Header"
import Banner from "./components/banner/Banner"
import Local from "./components/local/Local"
import Menu from "./components/menu/Menu"
import AboutUs from "./components/about/AboutUs"
import Footer from "./components/footer/Footer"

export default function Home() {
  return (
    <div id="App">
      <Header />
      <Banner />
      <Local />
      <Menu />
      <AboutUs />
      <Footer />
    </div>
  )
}
