import React, {useEffect} from 'react'
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience'
import Success from './components/Success/Success'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

const App = () => {
  useEffect(() => {
    // Animate the gradient background
    gsap.to('.animated-background', {
      backgroundPosition: '400% 0%',
      duration: 10,
      repeat: -1, // Infinite loop
      ease: 'sine.inOut',
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='animated-background h-screen w-full'>
      <Nav />
      <Body />
      <Services />
      <Portfolio />
      <Experience />
      <Success />
      <Contact />
      <Footer />
    </div>
  )
}

export default App