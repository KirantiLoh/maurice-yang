import React from 'react'
import { skillsData } from 'src/constants/skills'

const SkillSection = () => {
  return (
    <section id="skills" className='snap-normal px-5 sm:px-16 md:px-28 w-full min-h-screen sm:h-screen py-20 relative z-[1] flex justify-center flex-col'>
        <aside className="mb-5">
          <h1 className='text-3xl font-semibold'>About Me</h1>
          <h2>自己紹介 • 自我介绍</h2>
          <div className="p-3 opacity-70 flex flex-col gap-2">
            <p className='leading-7 mb-5'>
              As a Frontend Engineer, I have a proven track record of enhancing user experiences and driving business growth. At NetGrad, I developed an onboarding tutorial with driver.js and SolidJS, boosting user retention by 20%, and integrated a payment system, increasing revenue by 25%. At Core Initiative, I contributed to a salon dashboard project with VueJS, fixed major bugs, and simplified registration, resulting in a 10% user increase. At FlashCampus, I migrated the codebase to Typescript, reducing bugs by over 50%, and implemented key features with NextJS, increasing users by 30%. At Vidvie Indonesia, I designed a custom task management system with NextJS and Django REST Framework, improving efficiency. I hold a Computer Science degree from Universitas Indonesia and have led several web development projects. My skills include Typescript, Rust, Django, and more, with interests in web development, cybersecurity, and infrastructure.
            </p>
            <p className=''>
              I&apos;m open to any remote freelance projects or part-time job regarding web development, you can contact me <a href="#contact" className='underline'>here</a>
            </p>
          </div>
        </aside>
        <h1 className='text-3xl font-semibold'>Technologies I use:</h1>
        <h2>テクノロジーズ • 技術</h2>
        <ul className='p-3 flex flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center'>
          {skillsData.map((skill) => (
            <li key={skill.name} className="flex items-center gap-1 text-2xl opacity-70">
              {skill.icon} {skill.name}
            </li>
          ))}
        </ul>
    </section>
  )
}

export default SkillSection