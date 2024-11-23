import TextDescription from "./components/TextDescription"
import { RiShoppingBag3Line } from "react-icons/ri";
import ContentComponent from "../Components/Content";
import { RiArrowDownSLine } from "react-icons/ri";
import { WorkExperience } from "../data"; 
import Content from "../Components/Content";
import image1 from "../image/giant.png"
import image2 from "../image/albany.png"
import image3 from "../image/indomaret.png"
import image4 from "../image/aceHardware.png"
import image5 from "../image/ahi.png"
import image6 from "../image/service/powerOfCommunication.jpeg"
import {   
    IconArrowWaveRightUp,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn, } from "@tabler/icons-react";
import TimelineComponent from "./components/TimelineComponent";

const dataimages = [image1, image2, image3, image4, image5, image6];

const About = () => {
    return (
        <div data-aos='fade-down' data-aos-duration='1000'>
            <div  className="flex flex-col gap-6 border-neutral-400 dark:border-neutral-500 ">
                <ContentComponent
                    className={'pb-2 border-b border-dashed'}
                    text={'About'}
                    subtitle={'A short story of me'}
                    showCards={false}
                    />
                <TextDescription
                    subtitle={`Hi! I am Arif Rahman Hidayat, a seasoned software engineer with a deep passion for creating elegant and efficient solutions through code. With a strong foundation in JavaScript and TypeScript, along with a comprehensive understanding of various frontend libraries and frameworks, I heve been navigating the ever-evolving landscape of web development with enthusiasm and dedication. Currently, reside in Bekasi, Indonesia 🇮🇩.`}
                />
                <TextDescription
                    subtitle={`
                    As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but also a humble attitude that values every members input.`}
                />
                <TextDescription
                    subtitle={`
                    This blog is my platform to share insights, experiences, and discoveries from my journey as a software engineer. Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape the digital landscape in remarkable ways.

                    Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure`}/>
            </div>
            <Content
            icon={<RiShoppingBag3Line />}
            text={'My Experience'}
            subtitle={'My proffesional career journey'}
            Button={<div className="flex items-center gap-1"><RiArrowDownSLine className="border rounded-xl" /> <span className="hidden sm:flex">Download</span> My portfolio</div>}
            item={[WorkExperience]}
            showCards={false}
            link='https://www.google.com'
            className={"border-t my-5 py-4"}
            />
            <TimelineComponent/>
        </div>
        
    )
}

const Skeleton = ({images}) => (
    <div
    style={{  
      backgroundImage: `url(${images})`,
      height: '300px', 
      borderRadius:`10px`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',}}>
    </div>)
const items = [
    {
      key:1,
      title: "Pt Giant Tbk",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton images={dataimages[0]}/>,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      path:'Giant'
      
    },
    {
      key:2,
      title: "Pt Albany Corona Lestari",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton images={dataimages[1]} />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      path:'Pt Albany Corona Lestari'
    },
    {
      key:3,
      title: "Pt Indomarco Prismatama Tbk",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton images={dataimages[2]} />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      path:'Pt Indomarco Prismatama Tbk'
    },
    {
      key:4,
      title: "Pt Ace Hardware Indonesia Tbk",
      description: "Understand the impact of effective communication in our lives.",
      header: <Skeleton images={dataimages[3]} />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      path:'Pt Ace Hardware Indonesia Tbk'
    },
    {
      key:5,
      title: "Pt Aspirasi Hidup Indonesia",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton images={dataimages[4]} />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      path:'Pt Asirasi hidup Indonesia'
    },

  ];
  

export default About