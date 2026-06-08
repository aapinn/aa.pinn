import TextDescription from "../Pages/components/TextDescription"
import Typewriter from "../Pages/components/Typewriter"
import { TbMoodSmile } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";

const Header =() => {
    return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-6 mb-3 border-b border-dashed border-neutral-300 dark:border-neutral-600">
            <div>
              <div className="flex items-center gap-2 text-sm text-purple-500 dark:text-purple-400 mb-2">
                <TbMoodSmile className="text-lg" />
                <span>Welcome to my digital space!</span>
              </div>
              <h1 className="text-[1.6rem] lg:text-[2.2rem] font-bold dark:text-neutral-100 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Arif Rahman
                </span>
                <MdVerified className="inline text-sky-500 ml-1" />
              </h1>
              <div className="flex items-center gap-2 text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mt-1">
                I'm a{" "}
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Frontend Developer",
                    "UI/UX Enthusiast",
                    "Lifelong Learner",
                    "Problem Solver"
                  ]}
                  className="text-purple-500 dark:text-purple-400 font-semibold"
                />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <span className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Based in Indonesia
                </span>
                <a
                  href="https://github.com/aapinn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-purple-500 duration-300"
                >
                  <VscGithub className="text-sm" />
                  @aapinn
                </a>
              </div>
            </div>
          </div>
          <TextDescription
            subtitle={
              <>
                Passionate <strong>Software Engineer</strong> with a strong focus on{" "}
                <strong>frontend development</strong>. Proficient in React, TypeScript, and
                modern web technologies. I love turning complex problems into simple, beautiful,
                and intuitive solutions. Let's build something amazing together!{" "}
                <span className="inline-block animate-bounce">🚀</span>
              </>
            }
          />
        </motion.div>
    )
}
export default Header   
