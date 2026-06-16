import { Helmet } from 'react-helmet-async'
import Content from "../Components/Content";
import GitHubProjects from "./components/GitHubProjects";
import ProjectShowcase from "../Components/ProjectShowcase";
import { itemCards } from "../data";
import { motion } from "framer-motion";
import { GoProjectSymlink } from "react-icons/go";
import { TbExternalLink } from "react-icons/tb";

const liveProjects = [
  {
    title: "Catatan Belanja",
    desc: "A shopping note web app to help you track your expenses",
    url: "https://catatan-belanja-q.vercel.app",
    tech: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Portfolio V2",
    desc: "Previous version of my personal portfolio",
    url: "https://aapinn-v2.vercel.app",
    tech: ["React", "Framer Motion", "Tailwind"]
  },
  {
    title: "Portfolio V3",
    desc: "Current portfolio with full features and animations",
    url: "/",
    tech: ["React", "Tailwind", "Framer Motion"]
  }
];

const Projects = () => {
  return (
    <div data-aos='fade-down' data-aos-duration='1000'>
      <Helmet>
        <title>Projects - Arif Rahman Hidayat</title>
        <meta name="description" content="Collection of projects by Arif Rahman Hidayat - Portfolio V3, Shopping Notes, and other web development projects." />
        <meta property="og:title" content="Projects - Arif Rahman Hidayat" />
        <meta property="og:description" content="Collection of web development projects by Arif Rahman Hidayat." />
        <meta property="og:url" content="https://aapinn.vercel.app/projects" />
      </Helmet>
      <Content
        icon={<GoProjectSymlink />}
        text={'Projects'}
        subtitle={'Things I have built and contributed to'}
        showCards={false}
      />

      {/* Live Projects */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center gap-2">
          <span className="text-green-500 w-2 my-3 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
          Live & Deployed
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liveProjects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="block p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm hover:shadow-lg dark:hover:shadow-neutral-800/50 duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm">
                  {project.title}
                </h4>
                <TbExternalLink className="text-neutral-400 group-hover:text-purple-500 duration-300" />
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-4">All Projects</h3>
        <ProjectShowcase />
      </div>

      {/* GitHub Repos */}
      <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30">
        <GitHubProjects />
      </div>
    </div>
  );
};

export default Projects
