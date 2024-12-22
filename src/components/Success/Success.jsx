import React from 'react'

const Success = () => {
  return (
    <div className='mt-12 max-sm:px-20' id='about' data-aos="flip-right">
      <h2 className='text-center text-2xl font-semibold tracking-wider'>My Success</h2>

      <div className='success_items grid lg:grid-cols-3 md:grid-cols-3 md:px-6 max-sm:grid-cols-1 gap-11 justify-center mt-9 lg:px-28'>
        <div className='success_item bg-white p-5 rounded-2xl drop-shadow-lg border-1'>
          <div className='success_text_container bg-purple-900 text-white text-center lg:p-32 p-16 rounded-2xl drop-shadow-lg'>
            <h2 className='font-semibold text-2xl'>{new Date().getFullYear() - 2015}+</h2>
          </div>
          <p className='text-center mt-3'>Years of Experience</p>
        </div>

        <div className='success_item bg-white p-5 rounded-2xl drop-shadow-lg'>
          <div className='success_text_container  bg-pink-700 text-white text-center lg:p-32 p-16 rounded-2xl drop-shadow-lg'>
            <h2 className='font-semibold text-2xl'>90+</h2>
          </div>
          <p className='text-center mt-3'>Clients Worldwide</p>
        </div>

        <div className='success_item bg-white p-5 rounded-2xl drop-shadow-lg'>
          <div className='success_text_container bg-amber-600 text-white text-center lg:p-32 p-16 rounded-2xl drop-shadow-lg'>
            <h2 className='font-semibold text-2xl'>200+</h2>
          </div>
          <p className='text-center mt-3'>Projects Completed</p>
        </div>
      </div>
    </div>
  )
}

export default Success