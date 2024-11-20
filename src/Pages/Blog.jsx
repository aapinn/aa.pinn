import React from 'react'
import ClientTweetCard from "../Components/magicui/ClientTweetCard";


function Blog() {
  return (
    <div
    data-aos='fade-left' data-aos-duration='1000'
    className='text-neutral-700 dark:text-neutral-300'
    >
      <h1 className='text-xl '>Blog</h1>
    <ClientTweetCard id="778103649629339648"className="shadow-2xl" />
    <ClientTweetCard id="777889763906891776"className="shadow-2xl" />

    </div>
  )
}

export default Blog