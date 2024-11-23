import React from 'react'


function SubtitleDescription({icon, text}) {
  return <h2 className='py-3 font-medium text-neutral-700 gap-2 flex items-center text-xl dark:text-neutral-300/95'>{icon}
 {text}</h2>
}

export default SubtitleDescription