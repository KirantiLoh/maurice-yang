import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

const HeroSection = () => {

  const [scale, setScale] = useState(100);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScale(Math.round((window.scrollY + window.innerHeight) / (containerRef.current?.scrollHeight || 2 * window.innerHeight) * 100) + 50);
    });
  }, [])

  return (
    <section ref={containerRef} style={{ opacity: scale >= 150 ? "0" : "1" }} className={`snap-start px-5 sm:px-16 md:px-28 transition-opacity duration-700 pt-20 relative w-full h-[200vh] overflow-y-auto z-[1] ${scale >= 150 ? "pointer-events-none" : ""}`}>
      <div style={{ opacity: (scale - 70) / 100 }} className="pointer-events-none fixed top-1/2 md:top-1/3 -translate-y-1/2 xl:-top-[100vh] xl:-translate-y-0 -right-[200px] md:-right-[350px] lg:-right-[485px]">
        <Image src="/kon-1.png" alt="" style={{ scale: `${scale}%` }} priority width={1750} height={1750} className='object-cover w-[813px] md:w-[1000px] lg:w-[1250px] xl:w-[1750px] h-[813px] md:h-[1000px] lg:h-[1250px] xl:h-[1750px]' />
      </div>
      <aside className='flex flex-col gap-3 fixed max-w-full top-1/2 -translate-y-1/2 z-[1]'>
        <h1 className='text-xl sm:text-2xl sm:text-primary'>Maurice Yang • 楊理森</h1>
        <div className="font-semibold text-5xl sm:text-7xl flex flex-col gap-4">
          Creating
          <ul className='w-fit h-12 sm:h-16 overflow-hidden text-primary inline-flex flex-col gap-1'>
            <li className='transforming-text w-max'>Functional</li>
            <li className='transforming-text w-max'>Aesthetic</li>
            <li className='transforming-text w-max'>Inspiring</li>
          </ul>
          Websites
        </div>
        <p className='text-lg max-w-[20ch] sm:max-w-none opacity-70'>
          Full stack web developer based in Indonesia
        </p>
        <div className="flex flex-wrap items-center">
          <a href="#experience" className='w-max px-6 py-3 text-lg rounded-lg bg-primary-500 transition-all hover:bg-primary'>
            Learn More
          </a>
          <a target="_blank" rel="noreferrer" className='px-6 py-3 text-lg rounded-lg w-max' href="https://drive.google.com/file/d/1a97s7DFRr8TN9irCLhoYcGrY_FxEIlib/view?usp=share_link">View Resume</a>
        </div>
      </aside>
    </section>
  )
}

export default HeroSection