import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from '../image/LogoBrand.png'
import { BiHomeSmile, BiLeaf } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { IoPaperPlaneOutline, IoClose } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineLightBulb, HiMenu } from "react-icons/hi";
import { GoProjectSymlink } from "react-icons/go";
import DarkModeToggle from "../Pages/components/DarkModeToggle";
import portfolioV3 from "../image/portfolioV3.png"
import catatanBelanja from "../image/catatanBelanja.png"
import portfolioV2 from "../image/portfolioV2.png"
import giant from "../image/giant.png"
import albany from "../image/albany.png"
import indomaret from "../image/indomaret.png"
import aceHardware from "../image/aceHardware.png"
import ahi from "../image/ahi.png"
import { LiaBlogSolid } from "react-icons/lia";

export const navLinks = [
    {
        name: 'Home',
        path: '',
        id:1,
        icon: <BiHomeSmile />
    },
    {
        name: 'About',
        path: 'about',
        id:2,
        icon: <BiLeaf />
    },
    {
        name: 'Projects',
        path: 'projects',
        id:3,
        icon: <GoProjectSymlink />
    },
    {
        name: 'Services',
        path: 'services',
        id:4,
        icon: <RiServiceLine />
    },
    {
        name: 'Blog',
        path: 'blog',
        id:5,
        icon: <LiaBlogSolid />
    },
    {
        name: 'Roadmap',
        path: 'roadmap',
        id:6,
        icon: <HiOutlineLightBulb />
    },
    {
        name: 'Dashboard',
        path: 'dashboard',
        id:7,
        icon: <BsCodeSlash />
    },
    {
        name: 'Contact',
        path: 'contact',
        id:8,
        icon: <IoPaperPlaneOutline />
    }
]

export const Navbar = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center gap-2">
          <img src={logo} alt="arif" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">{props.name}</p>
            <p className="text-[10px] text-neutral-500 dark:text-neutral-400">{props.nick}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <HiMenu className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-72 max-w-[85vw] h-full bg-white dark:bg-neutral-900 shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-2">
                <img src={logo} alt="arif" className="w-9 h-9 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{props.name}</p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{props.nick}</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
              >
                <IoClose className="text-xl" />
              </button>
            </div>
            <div className="p-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium'
                        : 'text-neutral-700 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-200'
                    }`
                  }
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 mt-4">
              <p className="text-xs text-neutral-500 dark:text-neutral-500 text-center">
                ©2025 with 💖 by Arif Rahman
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:fixed lg:mt-2 lg:h-full lg:w-[17rem] top-0 z-50 overflow-y-auto scrollbar-hide duration-500">
        <div className="bg-white dark:bg-black font-normal p-4 flex flex-col gap-3 mt-1 py-2 dark:text-neutral-200 text-md rounded-r-2xl shadow-[4px_0_10px_rgb(0,0,0,0.2)] dark:shadow-[4px_0_10px_rgb(0,0,0,0.2)] dark:shadow-neutral-900">
          <div className="relative h-[7rem] mt-2 bg-gradient-to-br from-[rgba(209,213,219,1)50%] to-neutral-800 via-neutral-700 rounded-lg flex justify-center
          after:w-4 after:h-4 after:bg-white after:absolute after:dark:bg-black after:top-0 after:left-[93px]
          before:w-4 before:h-6 before:dark:bg-black before:bg-white before:absolute before:top-10 before:left-0">
            <div className="absolute left-0 p-2 rounded-br-2xl dark:bg-black dark:text-white bg-white
            after:w-4 after:h-5 after:absolute after:bg-inherit after:bg-neutral-300 z-50 after:top-[-0.1px] after:right-[-16px] after:rounded-tl-xl
            before:w-6 before:h-6 before:absolute before:bg-inherit before:bg-neutral-300 before:top-[42px] before:left-0 before:rounded-tl-xl">
              <p className="border border-neutral-600 text-neutral-900 dark:text-neutral-300 font-normal text-xs p-1 pr-2 rounded-2xl">
                <span className="animate-pulse">🟢</span> Hire me
              </p>
            </div>
            <img
              src={logo}
              alt="arif"
              width={90}
              className="absolute rounded-full top-[4rem] bg-neutral-100 p-2 hover:invert duration-500 overflow-hidden shadow-md border-white border-2"
            />
            <div className="absolute top-2 right-2">
              <DarkModeToggle />
            </div>
          </div>
          <div className="mt-14 text-center font-semibold pb-2 border-b border-neutral-300 dark:border-neutral-400 text-neutral-800 dark:text-neutral-300">
            <h1 className="flex items-center justify-center gap-2 text-lg lg:text-xl">
              {props.name}
              <MdVerified className="text-sky-500" />
            </h1>
            <p className="text-sm font-geist text-neutral-700 dark:text-neutral-400 font-normal">{props.nick}</p>
          </div>
          {navLinks.map((link) => (
            <div key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex p-2 rounded-md items-center gap-4 ${
                    isActive
                      ? 'bg-neutral-300 text-neutral-800 dark:bg-neutral-700 dark:text-slate-300'
                      : 'hover:bg-neutral-200 dark:hover:bg-neutral-400 dark:bg-transparent dark:hover:text-neutral-800 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400'
                  } duration-500 text-sm font-normal`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            </div>
          ))}
          <p className="text-sm text-neutral-700 dark:text-neutral-400 my-5">
            ©2025 with 💖 by Arif Rahman
          </p>
        </div>
      </div>
    </>
  );
};
  
export const itemCards = [
    {
        id: 1,
        title: 'Portfolio V3',
        date: 'React + Tailwind • Full Features',
        icon: portfolioV3,
        path:'latestArticle/PortfolioV3'
    },
    {
        id: 2,
        title: 'Catatan Belanja',
        date: 'Shopping Note • Web App',
        icon: catatanBelanja,
        path:'latestArticle/CatatanBelanja'
    },
    {
        id: 3,
        title: 'Portfolio V2',
        date: 'Vite + React • Responsive',
        icon: portfolioV2,
        path:'latestArticle/PortfolioV2'
    },
    {
        id: 4,
        title: 'Giant Experience',
        date: 'Internship • Retail Management',
        icon: giant,
        path:'experience/Giant'
    },
    {
        id: 5,
        title: 'Indomaret Dashboard',
        date: 'Store Ops • Management',
        icon: indomaret,
        path:'experience/Indomaret'
    },
    {
        id: 6,
        title: 'Ace Hardware',
        date: 'Sales & Customer Service',
        icon: aceHardware,
        path:'experience/AceHardware'
    }
  ];
  
export const WorkExperience = [
        {
          id: 1,
          title: 'Pt Giant Tbk',
          date: 'Apr 2018 - Juli 2018',
          icon: giant,
          path:'experience/Giant'  
        },
        {
          id: 2,
          title: 'Pt Albanyu Corona Lestari',
          date: 'Juli 2018 - Jan 2020',
          icon: albany,
          path:'experience/Albany' 
        },
        {
          id: 3,
          title: 'Pt Indomarco Prismatama Tbk',
          date: 'Jan 2020 - Okt 2022',
          icon: indomaret,
          path:'experience/Indomaret'
        },
        {
          id: 4,
          title: 'Pt Ace Hardware Tbk',
          date: 'Okt 2022 - Juni 2024',
          icon: aceHardware,
          path:'experience/AceHardware'
        },
        {
          id: 5,
          title: 'Pt Aspirasi Hidup Indonesia Tbk',
          date: 'Juni 2024 - Present',
          icon: ahi,
          path:'experience/Ahi'
        },
  ]

export const educationData = [
  {
    id: 1,
    school: "SMK Negeri 1 Kota Bekasi",
    major: "Multimedia",
    year: "2015 - 2018",
    desc: "Learned the fundamentals of design, video editing, and basic programming"
  },
  {
    id: 2,
    school: "Self-Taught Developer",
    major: "Frontend Web Development",
    year: "2019 - Present",
    desc: "Continuous learning through online courses, documentation, and building projects"
  }
]

export const servicesData = [
  {
    id: 1,
    title: "Web Development",
    desc: "Building responsive and performant websites using React, Next.js, and modern tools",
    icon: "💻",
    features: ["Single Page Apps", "Responsive Design", "API Integration", "Performance Optimization"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Crafting beautiful and intuitive user interfaces with modern design principles",
    icon: "🎨",
    features: ["Wireframing", "Prototyping", "Design Systems", "User Research"]
  },
  {
    id: 3,
    title: "Data Management",
    desc: "Organizing and managing data for easy access and insightful decision making",
    icon: "📊",
    features: ["Database Design", "Data Entry", "Spreadsheet Management", "Reporting"]
  },
  {
    id: 4,
    title: "Graphic Design",
    desc: "Creating visual content including logos, posters, and digital artwork",
    icon: "✏️",
    features: ["Logo Design", "Social Media Graphics", "Poster Design", "Brand Identity"]
  },
  {
    id: 5,
    title: "Tech Consulting",
    desc: "Providing expert advice on technology stack, architecture, and best practices",
    icon: "🚀",
    features: ["Tech Stack Advice", "Code Review", "Architecture Planning", "Best Practices"]
  },
  {
    id: 6,
    title: "Digital Marketing",
    desc: "Helping your online presence grow with effective digital strategies",
    icon: "📈",
    features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"]
  }
]
