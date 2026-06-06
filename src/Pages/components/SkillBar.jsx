import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs,
  SiFigma, SiNodedotjs, SiGit, SiMongodb, SiHtml5, SiCss3, SiPython
} from "react-icons/si";

const skills = [
  { name: "React / Next.js", level: 85, icon: <SiReact className="text-sky-400" /> },
  { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", level: 75, icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", level: 65, icon: <SiNodedotjs className="text-green-500" /> },
  { name: "HTML & CSS", level: 92, icon: <SiHtml5 className="text-orange-500" /> },
  { name: "Git", level: 80, icon: <SiGit className="text-red-500" /> },
  { name: "Figma", level: 70, icon: <SiFigma className="text-purple-400" /> },
  { name: "Python", level: 55, icon: <SiPython className="text-blue-400" /> },
  { name: "MongoDB", level: 60, icon: <SiMongodb className="text-green-400" /> },
];

function Bar({ name, level, icon, idx }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
          {icon}
          <span>{name}</span>
        </div>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  );
}

const SkillBar = () => {
  return (
    <div className="my-8 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-6 flex items-center gap-2">
        <span className="text-2xl">⚡</span> My Skills Arsenal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {skills.map((skill, idx) => (
          <Bar key={idx} {...skill} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default SkillBar;
