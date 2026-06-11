import { Helmet } from 'react-helmet-async'
import BackButton from '../components/BackButton'
import ContentComponent from '../../Components/Content'
import portfolioV2Banner from '../../image/portfolioV2Banner.png'
import TextDescription from '../components/TextDescription'

function portfolioV2() {
  return (
    <div data-aos='fade-down' data-aos-duration='1000'>
      <Helmet>
        <title>Portfolio V2 - Arif Rahman Hidayat</title>
        <meta name="description" content="Portfolio V2 - Versi kedua dari personal website Arif Rahman Hidayat yang dibangun dengan React dan Tailwind CSS." />
        <meta property="og:title" content="Portfolio V2 - Arif Rahman Hidayat" />
        <meta property="og:description" content="Versi kedua dari personal website Arif Rahman Hidayat." />
      </Helmet>
    <BackButton/>
    <ContentComponent
      className={'pb-2 border-b border-dashed'}
      text={'My Portfolio V2'}
      subtitle={'Publish On August 04, 2024'}
      showCards={false}/>
      <div className='overflow-hidden w-full'>

        <img
            src={portfolioV2Banner}
            title='CatatanBelanjaQ'
            className='w-full my-5 rounded-xl bg-cover bg-black '/>
      </div>
      <h1 className=' font-medium text-lg text-neutral-800 dark:text-neutral-300 bg-text-neutral-400 pb-5'>Introduction</h1>
      <TextDescription
        subtitle={'So much i have created a personal website with different style and type, and this one of my personal website i build with React.js and some UI from Magic UI and Aceternity UI'}
        
      />
      <br />
      <TextDescription
        subtitle={'Create this app just need 2 weeks proggres, and its not done yet'}
      />
      <TextDescription
        subtitle={
          <>
          If you want to see my personal website just click on here  <a href="https://aapinn-v2.vercel.app/" target='_blank' className='bg-neutral-300 p-1 rounded-md text-blue-700 dark:bg-neutral-700 dark:text-blue-300'> PortfolioV2</a> 
          </>
        }
      />
    </div>
  )
}

export default portfolioV2