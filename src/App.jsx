import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Content from './component/Content'
import Imgcontent from './component/Imgcontent'
import StatsSection from './component/StatsSection'
import InternTestimonials from './component/InternTestimonials'
import Services from './component/Service'







const App = () => {
  return (
    <div>
  
   <Navbar/>
   <Imgcontent/>
   <Content/>
  
   <StatsSection/>
   <InternTestimonials/>
 
   <Services/>
 
   <Footer/>

    </div>
  )
}

export default App
