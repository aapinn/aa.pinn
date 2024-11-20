import React from 'react'
import TextDescription from './TextDescription'
const TitleComponent = ({title, job, place, text}) => {
  return (
    <div className='leading-[2] py-5 border-neutral-400 dark:border-neutral-600'>
        <h1 className='text-[1.4rem] lg:text-[1.8rem] font-bold dark:text-neutral-100'>{title}</h1>
        <ul className='list-disc flex gap-8 px-5 pt-1 text-xs lg:text-lg text-neutral-700 dark:text-neutral-400 '>
          <li>{job}</li>
          <li>{place}</li>
        </ul>
        <TextDescription
          text='Passionate and seasoned Software Engineer with a strong focus on frontend development. Proficient in TypeScript and well-versed in all aspects of web technologies. Collaborative team player dedicated to delivering efficient, scalable, and visually appealing web applications.'
        />
    </div>
  )
}

export default TitleComponent