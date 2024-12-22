import React, { useState } from 'react'
import ElreyLogo  from '../../assets/elreyLogo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const [showNav, setShowNav] = useState(false)

  const handleNavClick = () => {
    setShowNav(!showNav);
  }
  return (
    <div className='w-full flex px-11 my-5 backdrop-blur bg-white bg-opacity-80 md:px-8 items-center drop-shadow-lg
    max-sm:justify-between lg:py-1 lg:mb-4 py-3 fixed max-sm:mt-0 md:-mt-[6rem] z-50 lg:-mt-[6rem]'>
     <a href='/' className='cursor-pointer w-[35%] md:w-[25%]'>
      <div className='nav_left_logo flex gap-4 m-3 max-sm:m-0 max-sm:my-4 items-center justify-center'>
        <img src={ElreyLogo} alt='Elrey' className='lg:w-[20%] w-[30%] md:w-[30%]'/>
        <h2 className='text-2xl tracking-wider'>Elrey</h2>
      </div>
     </a>

     <div className='nav_right_links flex gap-11 m-3 lg:justify-end w-[65%] md:w-[55%] items-center max-sm:hidden'>
      <a href="#"
          onClick={() => setActiveNav('#')} className={activeNav === '# text-gray-950 hover:text-blue-700' ? 'active ' : ''}
          >Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about text-gray-950 hover:text-blue-700' ? 'active' : ''}>About</a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : 'text-gray-950 hover:text-blue-700'}>Service</a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : 'text-gray-950'}>Portfolio</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#experience' ? 'active ' : ''} >Contact</a>
     </div>

     <div className='mobile_nav_section hidden max-sm:flex'>
      <FaBars size={35} onClick={handleNavClick} />
      {
        showNav ? (
          <div className='flex flex-col gap-6 items-center absolute backdrop-blur bg-white bg-opacity-90 px-2 py-4 rounded-full mt-20'>
          <a href="#"
          onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active bg-amber-600 text-white p-2 rounded-full' : ''}><AiOutlineHome size={30}/></a>
          <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active bg-amber-600 text-white p-2 rounded-full' : ''}><AiOutlineUser size={30}/></a>
          <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active bg-amber-600 text-white p-2 rounded-full' : ''}><BiBook size={30}/></a>
          <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active bg-amber-600 text-white p-2 rounded-full' : ''}><RiServiceLine size={30}/></a>
          <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active bg-amber-600 text-white p-2 rounded-full' : ''}><BiMessageSquareDetail size={30}/></a>
          </div>
        ) : null
      }
     </div>
    </div>
  )
}

export default Nav