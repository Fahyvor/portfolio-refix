import React, { useEffect, useRef, useState } from 'react';
import Fahyvor from '../../assets/ME.jpg';
import { FaCirclePlay } from "react-icons/fa6";
import { gsap } from "gsap";

const Body = () => {
  const developerRef = useRef(null); // Reference to the text container
  const [splitText, setSplitText] = useState([]); // State to store split text letters

  useEffect(() => {
    const text = developerRef.current;

    // Split the text content into individual letters and wrap them in <span> elements
    const splitTextArray = text.innerText.split('').map((letter, index) => (
      <span key={index} className="letter">{letter}</span>
    ));

    setSplitText(splitTextArray); // Update state with the split text
  }, []);

  useEffect(() => {
    // Once split text is rendered, trigger GSAP animation
    if (splitText.length > 0) {
      gsap.fromTo(
        '.letter',
        {
          opacity: 0,
          y: 50,
          rotationX: 180,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          delay: (index) => index * 0.05,
          ease: 'power3.out',
          stagger: 0.05,
          repeat: -1, // Infinite loop
          repeatDelay: 1, // Delay before repeating the animation
        }
      );
    }
  }, [splitText]); // This effect runs when splitText changes

  return (
    <div className='px-24 lg:mt-24 md:mt-24 flex gap-5 justify-between md:px-10 max-sm:flex-col max-sm:w-full w-full max-sm:px-6 max-sm:pt-20' data-aos="flip-down">
      <div className='body_left mt-28 pl-12'>
        <h6 className='font-semibold lg:text-4xl text-2xl my-5 tracking-wider max-sm:w-full'>
          Hi, I'm Favour Okafor
        </h6>
        <h2 className='lg:text-4xl text-2xl font-bold tracking-wider'>
          Web, Mobile, Blockchain
        </h2>
        <h2
          ref={developerRef}
          className='lg:text-8xl text-6xl font-bold mt-1 tracking-wider'
        >
          {splitText.length > 0 ? splitText : 'Developer'}
        </h2>

        <div className='hire_me flex gap-10 mt-10 max-sm:mt-6 items-center'>
          <div className='hire_me_button bg-amber-500 text-white py-1 px-5 rounded-full text-center cursor-pointer'>
            <a
              href="mailto:favourokafor30@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className='font-medium tracking-wider text-2xl'>Hire Me</p>
            </a>
          </div>
          <FaCirclePlay size={40} />
        </div>
      </div>

      <div className='body_right pr-8 max-sm:pr-0 max-sm:w-full max-sm:flex max-sm:justify-center max-sm:mt-1 p-5 max-sm:p-2'>
        <div className='bg-blue-100 bg-opacity-10 p-8 rounded-full flex justify-center items-center'>
          <div className='bg-blue-200 bg-opacity-10 p-6 rounded-full flex justify-center items-center'>
            <div className='bg-blue-300 bg-opacity-10 p-6 rounded-full flex justify-center items-center'>
              <div className='bg-blue-400 bg-opacity-10 p-4 rounded-full flex justify-center items-center'>
                <div className='overflow-hidden rounded-full h-[25rem] items-center w-[25rem] flex justify-center max-sm:h-[15rem] max-sm:w-[15rem]'>
                  <img src={Fahyvor} alt='Me' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
