import React from 'react'
import webIcon from '../../assets/webIcon.jpg'
import mobileIcon from '../../assets/mobileIcon.png'
import web3Icon from '../../assets/web3Icon.jpg'

const Services = () => {
  return (
    <div className='px-8 w-full pb-7' id='services' data-aos="flip-left">
     <h3 className='mt-10 text-center text-xl font-semibold tracking-wider'>Provide you with the best of Developement Services </h3>
     <p className='text-center'>What I Offer</p>

     <div className='service_cards grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-3 mt-12'>
      <div className='service_card flex flex-col items-center'>
       <div className='service_card_image overflow-hidden w-[10rem] flex justify-center items-center mt-8'>
        <img src={webIcon} alt='' />
       </div>

       <h3 className='font-semibold tracking-wider mt-[2.5rem]'>Website Development</h3>
       <p className='text-center w-5/6'>E-commerce Sites, Personal Websites, School Websites, Company Websites, Blogs, Portfolio Websites, SEO</p>
      </div>

      <div className='service_card flex flex-col items-center'>
       <div className='service_card_image overflow-hidden w-[12rem] flex justify-center items-center'>
        <img src={mobileIcon} alt='' />
       </div>

       <h3 className='font-semibold tracking-wider'>App Development</h3>
       <p className='text-center w-5/6'>Hybrid Applications, Web Applications</p>
      </div>

      <div className='service_card flex flex-col items-center'>
       <div className='service_card_image overflow-hidden w-[10rem] flex justify-center items-center'>
        <img src={web3Icon} alt='' />
       </div>

       <h3 className='font-semibold tracking-wider'>Blockchain Development</h3>
       <p className='text-center w-5/6'>ERC20 Token, BEP20 Token, ERC721 Token, Smart Contract Audit, Token ICO</p>
      </div>
     </div>
    </div>
  )
}

export default Services