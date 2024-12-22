import React from 'react'
import { FaFacebookF, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='px-20 md:px-10' id='contact'>
      <h2 className='text-center font-bold text-2xl mt-11 tracking-wider'>Contact Me</h2>
      <p className='text-center'>Get in touch</p>

      <div className='grid gap-3 lg:grid-cols-4 md:grid-cols-2 mt-8 max-sm:gap-8'>
        <a href="mailto:favourokafor30@gmail.com" target="_blank" className='flex gap-4 items-center'>
          <div className='bg-slate-100 rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
            <MdOutlineEmail size={20}  color='black'/>
          </div>

          <div>
            <h2 className='font-semibold tracking-wider'>Send a Message</h2>
          </div>
          
        </a>

        <a href="https://api.whatsapp.com/send/?phone=2349072033837&text&type=phone_number&app_absent=0" target="_blank" className='flex gap-4 items-center'> 
          <div className='bg-slate-100 rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
            <FaWhatsapp size={20} color='black' />
          </div>
          <div>
            <h2 className='font-semibold tracking-wider'>Whatsapp Handle</h2>
            {/* <small>Elrey</small> */}
          </div>
        </a>

        <a href="https://facebook.com/fahyvor" className='flex gap-4 items-center'> 
          <div className='bg-slate-100 rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
            <FaFacebookF size={20}  color='black'/>
          </div>
          <div>
            <h2 className='font-semibold tracking-wider'>Facebook Handle</h2>
            {/* <small>Favour Okafor Snr</small> */}
          </div>
        </a>

        <a href="https://instagram.com/fahyvor" className='flex gap-4 items-center'>
          <div className='bg-slate-100 rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
            <FiInstagram size={20} color='black'/>
          </div>
          <div>
            <h2 className='font-semibold tracking-wider'>Instagram Handle</h2>
            {/* <p></p> */}
          </div>
        </a>

        <a href="https://twitter.com/iamfavour3" className='flex gap-4 items-center'> 
          <div className='bg-slate-100 rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
            <IoLogoTwitter size={20} color='black' />
          </div>
          <div>
            <h2 className='font-semibold tracking-wider'>Twitter Handle</h2>
            {/* <small>Elrey</small> */}
          </div>
        </a>

        <a href="https://www.linkedin.com/in/fahyvor/" className='flex gap-4 items-center'> 
          <div className='bg-slate-100 rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
            <FaLinkedin size={20} color='black' />
          </div>
          <div>
            <h2 className='font-semibold tracking-wider'>LinkedIn Handle</h2>
            {/* <small>Elrey</small> */}
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contact