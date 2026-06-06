import TextDescription from "./components/TextDescription"
import { RiShoppingBag3Line, RiArrowDownSLine, RiMapPinLine } from "react-icons/ri";
import { TbHeart, TbCode, TbSparkles, TbSchool } from "react-icons/tb";
import { WorkExperience, educationData } from "../data"; 
import Content from "../Components/Content";
import image1 from "../image/giant.png"
import image2 from "../image/albany.png"
import image3 from "../image/indomaret.png"
import image4 from "../image/aceHardware.png"
import image5 from "../image/ahi.png"
import image6 from "../image/service/powerOfCommunication.jpeg"
import image7 from "../image/azko.png"
import {   
    IconArrowWaveRightUp,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn, } from "@tabler/icons-react";
import TimelineComponent from "./components/TimelineComponent";
import CardNextUi from "./components/CardNextUi";
import SkillBar from "./components/SkillBar";
import FunFacts from "./components/FunFacts";
import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import logo from "../image/LogoBrand.png"

const dataimages = [image1, image2, image3, image4, image5, image6, image7];

const About = () => {
    return (
        <div data-aos='fade-down' data-aos-duration='1000'>
          {/* Hero Section with Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6 p-6 mb-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-900 dark:to-neutral-800"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <img
                src={logo}
                alt="Arif Rahman"
                className="w-28 h-28 rounded-full border-4 border-white dark:border-neutral-700 shadow-lg relative"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 flex items-center justify-center md:justify-start gap-2">
                Arif Rahman Hidayat
                <MdVerified className="text-sky-500" />
              </h2>
              <p className="text-purple-500 dark:text-purple-400 font-medium flex items-center justify-center md:justify-start gap-1">
                <TbCode className="text-lg" /> Software Engineer
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center justify-center md:justify-start gap-1 mt-1">
                <RiMapPinLine /> Bekasi, Indonesia
              </p>
            </div>
          </motion.div>

          {/* About Bio with fun styling */}
          <div className="flex flex-col gap-4">
            <Content
              className={'pb-2 border-b border-dashed'}
              text={'About'}
              subtitle={'The story behind the code'}
              showCards={false}
            />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <TbHeart className="text-pink-500 text-lg" />
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Who Am I?</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Hi! I'm <strong>Arif Rahman Hidayat</strong>, a self-taught software engineer from Indonesia 🇮🇩 
                with a burning passion for crafting elegant solutions through code. My journey started in 2019, 
                and since then I've been hooked on turning ideas into reality on the web. I believe great software 
                isn't just about functionality — it's about creating experiences that make people smile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <TbSparkles className="text-yellow-500 text-lg" />
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">My Philosophy</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation 
                is the driving force. My collaborative nature allows me to seamlessly integrate with teams, 
                contributing not only my technical skills but also a humble attitude that values every member's input. 
                I'm a firm believer in <strong>lifelong learning</strong> — every line of code is an opportunity to grow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <TbCode className="text-purple-500 text-lg" />
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">What Drives Me</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                This portfolio is my platform to share insights, experiences, and discoveries from my journey 
                as a software engineer. Join me as we delve into the ever-exciting realm of technology, where 
                each line of code has the potential to shape the digital landscape in remarkable ways.
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mt-3">
                Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure with you! 
                <span className="inline-block ml-1 animate-bounce">✨</span>
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <SkillBar />

          {/* Fun Facts */}
          <FunFacts />

          {/* Education */}
          <div className="my-8">
            <div className="flex items-center gap-2 mb-4">
              <TbSchool className="text-lg text-neutral-700 dark:text-neutral-300" />
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Education</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationData.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30"
                >
                  <p className="text-xs text-purple-500 font-medium">{edu.year}</p>
                  <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">{edu.school}</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{edu.major}</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <Content
            icon={<RiShoppingBag3Line />}
            text={'My Experience'}
            subtitle={'My professional career journey'}
            Button={<div className="items-center hidden sm:flex"><RiArrowDownSLine className="border rounded-xl" /> Download My Portfolio</div>}
            item={[WorkExperience]}
            showCards={false}
            link='https://www.google.com'
            className={"border-t my-5 py-4"}
          />
          <TimelineComponent/>
          <CardNextUi/>
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
    {
      key:6,
      title: "Pt az·ko Indonesia Tbk",
      description: "Understand the impact of effective communication in our lives.",
      header: <Skeleton images={dataimages[6]} />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      path:'Pt az·ko Indonesia Tbk'
    }
  ];

export default About
