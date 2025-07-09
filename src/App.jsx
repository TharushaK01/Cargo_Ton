import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Welcome from './Components/welcome/welcome'
import Services from './Components/Services/Services'
import Stats from './Components/Stats/Stats'
import Testimonial from './Components/Testimonial/Testimonial'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Welcome/>
      <Services/>
      <Stats/>
      <Testimonial/>

    </div>
  )
}

export default App