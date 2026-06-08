import React from 'react'
import SubtitleDescription from '../Pages/components/SubtitleDescription'
import TextDescription from '../Pages/components/TextDescription'
import CardComponent from '../Pages/components/CardComponent';
import { itemCards } from '../data';

function ContentComponent({icon, text, subtitle, Button,link, showCards = true, className}) {
  return (
    <div className={`${className}relative border-slate-400 text-sm  dark:border-neutral-600`}>
    <SubtitleDescription 
        icon={icon} 
        text={text}/>
    <TextDescription
        subtitle={subtitle}
        Button={Button}
        link={link}/>
        <div id='wrapper' className=' flex gap-5 justify-between overflow-scroll h-fit scrollbar-hide'>
          {showCards && (
            <>
            <CardComponent cards={[itemCards[1]]}/>
            <CardComponent cards={[itemCards[0]]}/>
            <CardComponent cards={[itemCards[2]]}/>
            <CardComponent cards={[itemCards[3]]}/>
            <CardComponent cards={[itemCards[4]]}/>
            <CardComponent cards={[itemCards[5]]}/>
            </>
          )}

        </div>

    </div>
  )
}

export default ContentComponent
