import Image from 'next/image';
import { useRef, useState } from 'react'
import { useInView } from 'react-cool-inview';
import { projects } from 'src/constants/projects';
import { FiExternalLink } from "react-icons/fi";
import { Github } from '@icons-pack/react-simple-icons';

const ProjectSection = () => {

    const [show, setShow] = useState(false);

    const ref = useRef<HTMLElement>(null);

    const { observe } = useInView<HTMLElement>({
        threshold: 0.4,
        onEnter: () => {
            setShow(true)
        },
        onLeave: () => {
            if (window.innerWidth < 768) {
                if (window.scrollY > 5 * window.innerHeight) {
                    setShow(true);
                }
                else {
                    setShow(false);
                }
            } else {
                if (window.scrollY > 4 * window.innerHeight) {
                    setShow(true);
                }
                else {
                    setShow(false);
                }
            }
        }
    })

    return (
        <section ref={ref} id="projects" className={`${show ? "bg-background" : "bg-black"} snap-normal invert px-5 sm:px-16 md:px-28 w-full min-h-screen pt-20 relative z-[1]`}>
            <div ref={observe} className={`${show ? "opacity-0" : "opacity-100"} pointer-events-none text-black absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-[1] transition-all duration-1000 delay-300`}>
                <h2 style={{ writingMode: "vertical-lr" }} className='text-5xl text-white'>『闇纏・次元斬り』彼岸</h2>
            </div>
            <div className={`pointer-events-none transition-all duration-1000 ease-[cubic-bezier(1,-0.01,0,1)] z-[2] ${show ? "scale-x-100" : "scale-x-0"} origin-center w-full h-full backdrop-invert absolute top-0 left-0`}></div>
            <div className="mt-8 z-[1]">
                <h1 className='text-3xl font-semibold'>Projects</h1>
                <h2>プロジェクト • 项目</h2>
                <ul className='flex flex-wrap gap-10 xl:gap-20 pt-5'>
                    {projects.map((project, index) => (
                        <li key={index} className="flex flex-col gap-3 flex-1">
                            <div className='relative w-full min-w-[275px] lg:w-[400px] xl:w-[500px] aspect-[32/15]'>
                                <Image src={project.image} alt={project.name} fill className='object-cover' />
                            </div>
                            <h3 className='text-2xl font-semibold'>{project.name}</h3>
                            <p className="max-w-prose opacity-70">{project.description}</p>
                            <div className="flex items-center gap-4">
                                {project.url &&
                                    <a href={project.url} className="transition-colors duration-300 hover:text-primary cursor-pointer text-2xl" target="_blank" rel="noreferrer">
                                        <FiExternalLink />
                                    </a>}
                                <a href={project.github} className="transition-colors duration-300 hover:text-primary cursor-pointer" target="_blank" rel="noreferrer">
                                    <Github />
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProjectSection