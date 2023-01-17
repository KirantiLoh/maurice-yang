import React from 'react'

const ExperienceCard = ({
    period,
    position,
    company,
    url,
    achievements
}: IExperience) => {
  return (
    <div className='p-3 flex flex-col'>
        <p className='opacity-40'>{period}</p>
            <h3 className='mb-2 font-semibold flex flex-wrap items-center text-xl'>
                {position}
                <a href={url ?? ""} className="text-primary transition-all hover:text-opacity-70">@ {company}</a>
            </h3>
        <ul className='flex flex-col gap-2 list-disc ml-4 opacity-70 text-sm'>
            {achievements.map((achievement, index) => {
                return (
                    <li key={index}>
                        {achievement}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default ExperienceCard