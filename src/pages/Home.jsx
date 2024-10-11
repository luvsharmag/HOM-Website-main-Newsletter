// import React from 'react';
import Navbar from '../components/Navbar';
import GoToTopButton from '../components/Gototop';
import HeroSection from '../components/HeroSection';
import CTA from '../components/CTA';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import Companies from '../components/Companies';
import Footer from '../components/Footer';

const Home = () => {
  // const userName = localStorage.getItem('userName');

  return (
    <>
      <Navbar />
      
      <GoToTopButton />
      <HeroSection />
      <CTA />
      <Solutions />
      <Testimonials />
      <Companies />
      <Footer next='About' />
    </>
  );
};

export default Home;

