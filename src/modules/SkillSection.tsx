import React from 'react'
import { skillsData } from 'src/constants/skills'

const SkillSection = () => {
  return (
    <section id="skills" className='px-5 sm:px-16 md:px-28 w-full min-h-screen sm:h-screen py-20 relative z-[1] flex justify-center flex-col'>
      <aside className="mb-5">
        <h1 className='text-3xl font-semibold'>About Me</h1>
        <h2>自己紹介 • 自我介绍</h2>
        <div className="p-3 opacity-70 flex flex-col gap-2">
          <p className=''>
            I&apos;m a full stack web developer specializing in NextJS, currently studying at the University of Indonesia. Passionate
            to learn new technologies and improve both my hard and soft skills. My professional experience includes frontend
            engineer for Flashcampus, and BETIS Fasilkom UI, developing a custom task management website at VIDVIE
            Indonesia, a company website for Bintang Jaya Abadi.
          </p>
          <p className=''>
            I&apos;m open to any remote freelance projects or part-time job regarding web development, you can contact me <a href="#contact" className='underline'>here</a>
          </p>
        </div>
      </aside>
      <h1 className='text-3xl font-semibold'>Technologies I use:</h1>
      <h2>テクノロジーズ • 技術</h2>
      <ul className='p-3 flex flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center'>
        {skillsData.map((skill, index) => (
          <li key={index} className="flex items-center gap-1 text-2xl opacity-70">
            {skill.icon} {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillSection