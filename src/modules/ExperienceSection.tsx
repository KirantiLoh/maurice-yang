import ExperienceCard from '@components/ExperienceCard'
import React, { useState } from 'react'
import { useInView } from 'react-cool-inview'
import { experienceData } from 'src/constants/experience'

const ExperienceSection = () => {

  const [show, setShow] = useState(false)

  const { observe } = useInView<HTMLElement>({
    threshold: 0.6,
    onEnter: () => {
      setShow(true)
    },
    onLeave: () => {
      if (window.scrollY > 2 * window.innerHeight) {
        setShow(true);
      }
      else {
        setShow(false);
      }
    }
  })

  return (
    <section id="experience" className={`snap-start pt-20 px-5 sm:px-16 md:px-28 relative bg-white overflow-hidden w-full`}>
      <div className={`pointer-events-none fixed top-0 w-full h-1/2 bg-background transition-all duration-700 ${!show ? "skew-y-[30deg] -right-[150%]" : "skew-y-0 right-0"}`}></div>
      <div className={`pointer-events-none fixed bottom-0 w-full h-1/2 bg-background transition-all duration-700 ${!show ? "-skew-y-[30deg] -right-[150%]" : "skew-y-0 right-0"}`}></div>
      <div ref={observe} className={`${show ? "opacity-0" : "opacity-100"} text-black absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-[1] transition-all duration-1000`}>
        <h1 className='text-6xl sm:text-9xl'>
          コン
        </h1>
        <p className="text-2xl">- Kon -</p>
      </div>
      <div className={`pt-8 z-[1] relative w-full h-full transition-all duration-[1.7s] ${show ? "opacity-100" : "opacity-0"} `}>
        <h1 className="text-3xl font-semibold">Experience</h1>
        <h2>経験 • 经验</h2>
        {experienceData.map((experience, index) => <ExperienceCard key={index} {...experience} />)}
      </div>
    </section>
  )
}

export default ExperienceSection