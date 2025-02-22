import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Content from './component/Content'
import Imgcontent from './component/Imgcontent'

import Navbarb from './component/Navbarb'
import StatsSection from './component/StatsSection'
import InternTestimonials from './component/InternTestimonials'
import StarPerformer from './component/StarPerformer'
import VideoSlider from './component/VideoSlider'
import Services from './component/Service'
import Footerx from './component/Footerx'



const App = () => {
  return (
    <div>
   
   {/* <Navbar/> */}
   <Navbarb/>
   <Imgcontent/>
   <Content/>
   {/* <Features/> */}
   {/* <Card/> */}
   <StatsSection/>
   <InternTestimonials/>
   {/* <StarPerformer/> */}
   {/* <VideoSlider /> */}

   <Services/>
   {/* <Footer/> */}
   <Footerx/>

    </div>
  )
}

export default App
