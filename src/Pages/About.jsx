import { Helmet } from 'react-helmet-async'
import { RiShoppingBag3Line, RiMapPinLine } from "react-icons/ri";
import { TbHeart, TbCode, TbSparkles, TbSchool, TbBriefcase } from "react-icons/tb";
import { educationData, WorkExperience } from "../data";
import Content from "../Components/Content";
import SkillBar from "./components/SkillBar";
import FunFacts from "./components/FunFacts";
import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";

const About = () => {
    return (
        <div data-aos='fade-down' data-aos-duration='1000'>
          <Helmet>
            <title>About Me - Arif Rahman Hidayat</title>
            <meta name="description" content="Tentang Arif Rahman Hidayat - Software Engineer, Frontend Developer, dan UI/UX Designer dari Bekasi, Indonesia. Belajar otodidak sejak 2019." />
            <meta property="og:title" content="About Me - Arif Rahman Hidayat" />
            <meta property="og:description" content="Tentang Arif Rahman Hidayat - Software Engineer dan Frontend Developer dari Bekasi, Indonesia." />
            <meta property="og:url" content="https://aapinn.vercel.app/about" />
          </Helmet>
          {/* Hero Section with Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6 p-6 mb-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-900 dark:to-neutral-800"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 flex items-center justify-center md:justify-start gap-2">
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
              className={'pb-2 border-b border-dashed border-neutral-300 dark:border-neutral-600'}
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

          {/* 🧩 CLUE 3: Aku hewan berkaki empat, suka memakan tikus, dan bersuara 'meow'. Siapa aku? Hitung jumlah huruf namanya. */}
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
          <div className="border-t mt-5 pt-4">
            <div className="flex items-center gap-2 mb-2">
              <RiShoppingBag3Line className="text-neutral-700 dark:text-neutral-300" />
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">My Experience</h3>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">Where I've grown and contributed</p>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 rounded-full" />

              {WorkExperience.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex gap-4 mb-6 last:mb-0"
                >
                  {/* Dot */}
                  <div className="relative z-10 mt-1">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border-2 border-purple-400 dark:border-purple-500 flex items-center justify-center overflow-hidden shadow-sm">
                      <img src={exp.icon} alt="" className="w-5 h-5 object-contain" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:shadow-md hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{exp.title}</h4>
                        <p className="text-[11px] text-purple-500 dark:text-purple-400 font-medium mt-0.5">
                          {exp.id === 4 ? 'Sales Executive' : exp.id === 3 ? 'Sales Associate' : exp.id === 2 ? 'Store Senior Leader' : 'Intern'}
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 font-medium">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      {exp.id === 4 && "Delivering exceptional service and solutions at Pt Aspirasi Hidup Indonesia, focusing on customer needs and building lasting relationships."}
                      {exp.id === 3 && "Providing top-tier service at Pt Ace Hardware Indonesia, helping customers find the perfect tools and solutions for their projects."}
                      {exp.id === 2 && "Led store operations and teams at Indomaret, mastering inventory management, cost control, and team leadership."}
                      {exp.id === 1 && "First step into the professional world — an internship at Pt Giant Tbk that sparked my passion for working with people."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors border border-purple-500 dark:border-purple-400 rounded-full px-4 py-2 font-medium"
              >
                <TbBriefcase className="text-sm " />
                Download My Portfolio
              </a>
            </div>
          </div>
        </div>
    )
  }

export default About
