import NavBar from '../components/layout/NavBar'
import Hero from '../components/Hero'
import Services from '../components/Services';
import Footer from '../components/layout/Footer';
import Cards from '../components/layout/Cards';
// import Resume from './Resume';

function Landing() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Cards />
      <Footer />
    </>
  )
}

export default Landing