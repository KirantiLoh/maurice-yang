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
              As a Software Engineer and AI Researcher, I bring a unique combination of production engineering experience and cutting-edge research expertise. Most recently as a Forward Deployed Engineer at Covena.ai, I developed comprehensive end-to-end AI solutions for multiple clients, reducing LLM hallucinations by 90% through robust prompt engineering. At Bridestory, I built RAG-based AI assistants and migrated Laravel endpoints to Flask, improving latency by 10%. My research at Computer Systems Lab Fasilkom UI focused on developing an anomaly-gated fine-tuning framework for Kubernetes resource forecasting, combining Isolation Forest with CatBoost-Bi-GRU ensemble to reduce MAE by 29.4% and RMSE by 18.2%. I&apos;ve also created a fully autonomous continual learning framework to handle domain shift and concept drift. Earlier in my journey, I contributed to full-stack development at GlobalDeel, NetGrad, and Core Initiative, building AI-powered features and user-centric applications. I hold a Computer Science degree from Universitas Indonesia, specializing in time series forecasting, algorithms, system design, and information retrieval.
            </p>
            <p className=''>
              I&apos;m open to opportunities in AI/ML engineering, backend development, and research roles. Feel free to contact me <a href="#contact" className='underline'>here</a>
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