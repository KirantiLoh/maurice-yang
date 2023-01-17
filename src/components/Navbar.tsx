import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [show, setShow] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    })
  }, []);
  
  return (
    <nav className={`z-10 fixed top-0 left-0 w-full py-3 px-6 md:px-10 lg:px-16 min-h-[80px] flex items-center justify-between transition-all duration-500 delay-500 ${isTransparent ? "bg-transparent" : "bg-background"}`}>
      <h1 className='text-2xl sm:text-3xl'>
        <Link href="/">
          Maurice Yang
        </Link>
      </h1>
      <ul onClick={() => setShow(false)} className={`fixed top-0 ${show ? "left-0" : "-left-full"} transition-all duration-500 text-2xl sm:text-base bg-background w-full h-screen sm:w-auto sm:h-auto sm:bg-transparent sm:static flex flex-col sm:flex-row items-center justify-center gap-8`}>
        <li title="Experience" className='hover:glitching-text'>
          <a href="#experience">
            Experience
          </a>
        </li>
        <li title="Skills" className='hover:glitching-text'>
          <a href="#skills">
            Skills
          </a>
        </li>
        <li title="Projects" className='hover:glitching-text'>
          <Link href="#projects">
            Projects
          </Link>
        </li>
        <li title="Contact" className='hover:glitching-text'>
          <a href="#contact" className='px-4 py-2 border-2 border-white rounded'>
            Contact
          </a>
        </li>
      </ul>
      <div className='sm:hidden z-[1]' onClick={() => setShow(!show)}>
        <div className={`w-6 h-0.5 rounded bg-white mb-1.5 transition-all ${show ? "rotate-45 translate-y-2" : ""}`}></div>
        <div className={`w-4 h-0.5 rounded bg-white mb-1.5 ${show ? "-translate-x-5 opacity-0" : ""} transition-all`}></div>
        <div className={`w-6 h-0.5 rounded bg-white transition-all ${show ? "-rotate-45 -translate-y-2" : ""}`}></div>
      </div>
    </nav>
  )
}

export default Navbar