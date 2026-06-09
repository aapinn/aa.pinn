import React from 'react'
import BackButton from '../components/BackButton'
import ContentComponent from '../../Components/Content'
import portfolioV3 from '../../image/portfolioV3.png'
import { motion } from 'framer-motion'
import { TbCode, TbDeviceDesktop, TbMoon, TbSparkles, TbLayoutGrid, TbSpeedboat, TbRocket, TbStar, TbZzz, TbPalette, TbArrowsMaximize, TbBrandTailwind, TbBrandReact } from 'react-icons/tb'

const features = [
  { icon: <TbMoon className='text-base md:text-lg'/>, title: 'Dark Mode', desc: 'System-aware with smooth transition', gradient: 'from-indigo-500 to-purple-500' },
  { icon: <TbSparkles className='text-base md:text-lg'/>, title: 'Micro Animations', desc: 'Spring physics on every interaction', gradient: 'from-purple-500 to-pink-500' },
  { icon: <TbLayoutGrid className='text-base md:text-lg'/>, title: 'Bento Layout', desc: 'Magazine-style visual hierarchy', gradient: 'from-pink-500 to-rose-500' },
  { icon: <TbSpeedboat className='text-base md:text-lg'/>, title: 'Performance', desc: 'Lazy loaded, code-split, fast', gradient: 'from-rose-500 to-red-500' },
  { icon: <TbArrowsMaximize className='text-base md:text-lg'/>, title: 'Responsive', desc: 'Pixel-perfect across all screens', gradient: 'from-orange-500 to-amber-500' },
  { icon: <TbPalette className='text-base md:text-lg'/>, title: 'Custom Design', desc: 'Every component hand-crafted', gradient: 'from-amber-500 to-yellow-500' },
]

const techStack = [
  { name: 'React', icon: <TbBrandReact className='text-sky-400'/>, level: 95, desc: 'Component architecture' },
  { name: 'Tailwind', icon: <TbBrandTailwind className='text-cyan-400'/>, level: 92, desc: 'Utility-first styling' },
  { name: 'Framer', icon: <TbRocket className='text-pink-400'/>, level: 88, desc: 'Gesture & animations' },
  { name: 'Vite', icon: <TbZzz className='text-purple-400'/>, level: 90, desc: 'Lightning-fast build' },
]

function PortfolioV3() {
  return (
    <div data-aos='fade-down' data-aos-duration='1000' className='space-y-4 md:space-y-6'>
      <BackButton/>
      <ContentComponent
        className='pb-2 border-b border-dashed'
        text={'Portfolio V3'}
        subtitle={'React + Tailwind • Full Features'}
        showCards={false}/>

      {/* Hero Image */}
      <div className='relative overflow-hidden rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 group'>
        <img src={portfolioV3} title='PortfolioV3' className='w-full aspect-video object-cover group-hover:scale-[1.02] duration-700'/>
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'/>
        <div className='absolute bottom-2 md:bottom-4 left-2 md:left-4 flex flex-wrap gap-1.5 md:gap-2'>
          <span className='px-2.5 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-neutral-800 dark:text-neutral-200 shadow-sm'>✨ v3.0</span>
          <span className='px-2.5 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'>Latest</span>
        </div>
      </div>

      {/* Feature Grid */}
      <div>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-4 flex items-center gap-2'>
          <TbStar className='text-yellow-500'/> Key Features
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3'>
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -3 }}
              className='p-3 md:p-4 rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-white/50 to-neutral-50/50 dark:from-neutral-900/50 dark:to-neutral-800/50 backdrop-blur-sm'>
              <div className={`inline-flex p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br ${f.gradient} text-white mb-1.5 md:mb-2 text-xs md:text-sm`}>{f.icon}</div>
              <p className='text-[11px] md:text-xs font-semibold text-neutral-800 dark:text-neutral-200'>{f.title}</p>
              <p className='text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed'>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className='p-4 md:p-6 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-white/30 to-neutral-50/30 dark:from-neutral-900/30 dark:to-neutral-800/30 backdrop-blur-sm'>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-5 flex items-center gap-2'>
          <TbCode className='text-purple-500'/> Tech Stack
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'>
          {techStack.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className='text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/40 dark:bg-neutral-800/40 border border-neutral-200/50 dark:border-neutral-700/50'>
              <div className='text-xl md:text-3xl mb-1 md:mb-2 flex justify-center'>{t.icon}</div>
              <p className='text-xs md:text-sm font-semibold text-neutral-800 dark:text-neutral-200'>{t.name}</p>
              <p className='text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5'>{t.desc}</p>
              <div className='mt-1.5 md:mt-2 w-full h-1 md:h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${t.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className='h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500'/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Demo */}
      <motion.a
        href='https://aapinn.vercel.app'
        target='_blank'
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative block overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900 p-4 md:p-6 group cursor-pointer'>
        <div className='absolute top-0 right-0 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl'/>
        <div className='relative flex items-center justify-between'>
          <div>
            <div className='flex items-center gap-2 mb-1 md:mb-2'>
              <TbRocket className='text-lg md:text-2xl text-purple-400'/>
              <h4 className='text-sm md:text-base font-bold text-white'>Live Demo</h4>
            </div>
            <p className='text-[10px] md:text-xs text-neutral-400 group-hover:text-purple-300 duration-300'>aapinn.vercel.app →</p>
          </div>
          <div className='w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-purple-500/30 duration-300'>
            <TbRocket className='text-white text-sm md:text-base'/>
          </div>
        </div>
      </motion.a>
    </div>
  )
}

export default PortfolioV3
