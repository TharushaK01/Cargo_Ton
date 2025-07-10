import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Welcome from './Components/Welcome/Welcome'
import Services from './Components/Services/Services'
import Stats from './Components/Stats/Stats'
import Testimonial from './Components/Testimonial/Testimonial'
import LogoSlider from './Components/LogoSlider/LogoSlider'
import NewsSection from './Components/NewsSection/NewsSection'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Welcome/>
      <Services/>
      <Stats/>
      <Testimonial/>
      <LogoSlider/>
      <NewsSection  />  
      <Footer/>
    </div>
  )
}

export default App