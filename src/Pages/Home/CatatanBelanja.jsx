import React from 'react'
import BackButton from '../components/BackButton'
import ContentComponent from '../../Components/Content'
import catatanBelanjaBanner from '../../image/catatanBelanjaBanner.png'
import TextDescription from '../components/TextDescription'
function CatatanBelanja() {
  return (
    <div data-aos='fade-down' data-aos-duration='1000'>
    <BackButton/>
    <ContentComponent
      className={'pb-2 border-b border-dashed'}
      text={'Catatan Belanja'}
      subtitle={'Publish On August 04, 2024'}
      showCards={false}/>
      <div className='overflow-hidden w-full'>

        <img
            src={catatanBelanjaBanner}
            title='CatatanBelanjaQ'
            className='w-full my-5 rounded-xl bg-cover bg-black '/>
      </div>
      <h1 className=' font-medium text-lg text-neutral-800 dark:text-neutral-300 bg-text-neutral-400 pb-5'>Introduction</h1>
      <TextDescription
        subtitle={'In the dynamic world off app development, having a right tools to get life more easy, so i decide to build a notes for you to write and checklist what do you need to do'}
        
      />
      <br />
      <TextDescription
        subtitle={'I also create with a quantity, name ,number and remark for more easy to manage'}
      />
      <TextDescription
        subtitle={
          <>
          Having a trouble with youre note, just click on me <a href="https://catatan-belanja-q.vercel.app/" target='_blank' className='bg-neutral-300 p-1 rounded-md text-blue-700 dark:bg-neutral-700 dark:text-blue-300'> Catatan BelanjaQ</a> 
          </>
        }
      />
    </div>
  )
}

export default CatatanBelanja