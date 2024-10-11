// import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HorizontalScroll from '../components/HorizontalScroll'
// import Social from '../components/Social'
// import AboutFooter from '../components/AboutFooter'

const About = () => {
  return (
    <div>
      <Navbar />

      <div className='h-[550px] text-white font-dela-gothic flex justify-center items-center bg-[url("https://growify.in/cdn/shop/files/about_us_hero.jpg?v=1716293561&width=1800")]'>
        <h1 className="text-6xl">We Grow, When You Grow</h1>
      </div>

      <HorizontalScroll />
      {/* <Social /> */}
      {/* <AboutFooter /> */}
      <Footer next='OurWork' />
    </div>
  );
}

export default About