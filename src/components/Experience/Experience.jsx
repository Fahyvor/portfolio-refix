import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
const skillsArray = [
  {
    skill: "HTML",
    proficiency: "Experienced"
  },
  {
    skill: "CSS",
    proficiency: "Experienced"
  },
  {
    skill: "JavaScript",
    proficiency: "Experienced"
  },
  {
    skill: "TailwindCSS",
    proficiency: "Experienced"
  },
  {
    skill: "Bootstrap",
    proficiency: "Experienced"
  },
  {
    skill: "ReactJs",
    proficiency: "Experienced"
  },
  {
    skill: "NextJs",
    proficiency: "Experienced"
  },
  {
    skill: "VueJs",
    proficiency: "Basic"
  },
  {
    skill: "Ionic React",
    proficiency: "Experienced"
  },
  {
    skill: "React Native",
    proficiency: "Intermediate"
  },
  {
    skill: "CorelDRAW",
    proficiency: "Experienced"
  },
  {
    skill: "Photoshop",
    proficiency: "Intermediate"
  },
  {
    skill: "Solidity",
    proficiency: "Experienced"
  },
  {
    skill: "NodeJs",
    proficiency: "Intermediate"
  },
  {
    skill: "ExpressJs",
    proficiency: "Intermediate"
  },
  {
    skill: "MongoDB",
    proficiency: "Experienced"
  },
  {
    skill: "PostgreeSQL",
    proficiency: "Intermediate"
  },
  {
    skill: "PHP",
    proficiency: "Basic"
  },
  {
    skill: "Python",
    proficiency: "Basic"
  }
]

const Experience = () => {
  return (
    <div className='px-20 mt-12 max-sm:px-10' id='experience' data-aos="zoom-out-up">
      <h3 className='text-center text-2xl font-bold tracking-wider'>My Experience</h3>
      <p className='text-center'>Skills I have</p>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 gap-6 mt-8 '>
        {skillsArray.map((skillArray, index) => (
          <div className='flex gap-5 items-center'>
            <BsPatchCheckFill size={20}/>
            <div className='skills_container'key={index} >
                <h2 className='font-bold tracking-wider'>{skillArray.skill}</h2>
                <p className='text-amber-500 text-xs'>{skillArray.proficiency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience