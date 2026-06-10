import { motion } from "framer-motion";
import Content from "../Components/Content";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbCheck, TbArrowRight, TbTarget, TbRocket, TbCode, TbBriefcase } from "react-icons/tb";

const milestones = [
  { year: "2019", title: "Started Coding", desc: "Began self-learning HTML, CSS, and JavaScript", icon: "🌱", done: true },
  { year: "2020", title: "First Freelance Project", desc: "Built my first website for a local business", icon: "💼", done: true },
  { year: "2021", title: "Deep Dive into React", desc: "Mastered React, hooks, and state management", icon: "⚛️", done: true },
  { year: "2022", title: "TypeScript & Next.js", desc: "Leveled up with TypeScript and server-side rendering", icon: "📘", done: true },
  { year: "2023", title: "Full-Stack Exploration", desc: "Learned Node.js, databases, and API design", icon: "🔧", done: true },
  { year: "2024", title: "Open Source Contributions", desc: "Started contributing to open source projects", icon: "🌟", done: true },
  { year: "2025", title: "Building SaaS Products", desc: "Developing scalable web applications and tools", icon: "🚀", done: false },
  { year: "2026", title: "Tech Leadership", desc: "Mentoring junior developers and leading teams", icon: "👨‍🏫", done: false },
  { year: "Future", title: "Digital Nomad", desc: "Working remotely while traveling the world", icon: "🌍", done: false },
];

const goals = [
  { icon: <TbCode />, text: "Master full-stack development with Next.js" },
  { icon: <TbRocket />, text: "Launch my own SaaS product" },
  { icon: <TbBriefcase />, text: "Work with international tech teams" },
  { icon: <TbTarget />, text: "Contribute to 10+ open source projects" },
];

const Roadmap = () => {
  return (
    <div data-aos='fade-down' data-aos-duration='1000' className="overflow-x-hidden">
      <Content
        icon={<HiOutlineLightBulb />}
        text={'Roadmap'}
        subtitle={'My learning journey and future goals'}
        showCards={false}
      />

      {/* Timeline */}
      <div className="relative my-8">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-1/2" />
        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className={`relative flex items-start gap-4 mb-6 ${
              idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="hidden md:block w-1/2" />
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-purple-500 border-2 border-white dark:border-neutral-900 transform -translate-x-1/2 mt-6 z-10" />
            <div className={`ml-10 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
              <div className={`p-4 rounded-2xl border ${
                m.done
                  ? 'border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20'
                  : 'border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30'
              } backdrop-blur-sm ${!m.done && 'opacity-60'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{m.icon}</span>
                  {m.done && <TbCheck className="text-green-500" />}
                </div>
                <p className="text-xs text-purple-500 font-medium">{m.year}</p>
                <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{m.title}</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{m.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Goals */}
      <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-200 dark:border-purple-800/30">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center gap-2">
          <TbTarget className="text-purple-500" /> Goals & Aspirations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {goals.map((goal, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-neutral-800/50">
              <div className="text-purple-500 text-lg">{goal.icon}</div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{goal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
