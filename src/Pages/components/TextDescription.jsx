import React from 'react'
import { NavLink } from 'react-router-dom'

const TextDescription = ({subtitle, className, Button, link}) => {
  return (
    <div className='relative'>
      <p className={`text-neutral-700 text-sm dark:text-neutral-300/90 leading-[2] ${{className}}`}>{subtitle}</p>
      <a href={link} className='absolute top-1 right-0 flex items-center gap-1 hover:scale-105  duration-300'>{Button}</a>
    </div> 
  )
}

export default TextDescription