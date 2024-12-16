import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import HeroSecond from "./Components/HeroSecond";
import Seminar from "./Components/Seminar";
import Sponsors from "./Components/Sponsors";
import Events from "./Components/Events";
import Register from "./Components/Register";
import Conference from "./Components/Conference";
import Attendant from "./Components/Attendant";
import Faq from "./Components/Faq";
import Foot from "./Components/Foot";
import Footer from "./Components/Footer";

const App = () => {
  return(
    <div className="">
      <Navbar/>
      <HeroSection/>
      <HeroSecond/>
      <Seminar/>
      <Sponsors/>
      <Events/>
      <Register/>
      <Conference/>
      <Attendant/>
      <Faq/>
      <Foot/>
      <Footer/>
      
    </div>
  )
}

export default App;