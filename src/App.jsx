import './App.css'
import Carousel from './components/carousel/Carousel'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import AboutUs from './components/aboutus/AboutUs'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <AboutUs />
      <Services />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
