import React from 'react'
import BackButton from '../components/BackButton'
import ContentComponent from '../../Components/Content'
import aceHardware from '../../image/aceHardware.png'
import { motion } from 'framer-motion'
import { TbStars, TbShoppingBag, TbTools, TbMessage, TbChecklist, TbBulb, TbHeart, TbQuote, TbPaint, TbPlant, TbPlug, TbHammer, TbThumbUp, TbAward } from 'react-icons/tb'

const categories = [
  { name: 'Power Tools', icon: <TbHammer className='text-lg md:text-xl'/>, desc: 'Drills, saws, sanders — knew specs & safety', items: '15+ brands mastered', color: 'from-orange-400 to-red-500' },
  { name: 'Painting', icon: <TbPaint className='text-lg md:text-xl'/>, desc: 'Color matching, finish types, surface prep', items: '200+ color codes', color: 'from-pink-400 to-purple-500' },
  { name: 'Electrical', icon: <TbPlug className='text-lg md:text-xl'/>, desc: 'Cables, switches, bulbs — basic installations', items: '50+ product SKUs', color: 'from-yellow-400 to-amber-500' },
  { name: 'Gardening', icon: <TbPlant className='text-lg md:text-xl'/>, desc: 'Plants, pots, soil, fertilizers, pest control', items: '30+ plant species', color: 'from-green-400 to-emerald-500' },
]

const highlights = [
  { icon: <TbShoppingBag/>, value: 'Sales', title: 'Advisor', desc: 'Guided customers to perfect purchases with confidence' },
  { icon: <TbBulb/>, value: 'Creative', title: 'Solutions', desc: 'Found unique answers for tricky home improvement problems' },
  { icon: <TbHeart/>, value: 'Trusted', title: 'Advisor', desc: 'Customers returned asking for me by name — that was the win' },
  { icon: <TbChecklist/>, value: 'Inventory', title: 'Whiz', desc: 'Maintained spot-on stock accuracy and stunning displays' },
]

const skills = [
  { name: 'Product Knowledge', level: 92, color: 'from-yellow-400 to-orange-500', emoji: '📚' },
  { name: 'Consultative Selling', level: 88, color: 'from-orange-400 to-red-500', emoji: '🎯' },
  { name: 'Customer Service', level: 95, color: 'from-amber-400 to-yellow-500', emoji: '💬' },
  { name: 'Inventory Control', level: 85, color: 'from-yellow-500 to-amber-600', emoji: '📦' },
  { name: 'Visual Merchandising', level: 82, color: 'from-amber-500 to-orange-600', emoji: '✨' },
  { name: 'Team Collaboration', level: 90, color: 'from-orange-500 to-red-600', emoji: '🤝' },
]

const moments = [
  { emoji: '🔨', text: 'Helped a customer build their first DIY tool shed from scratch' },
  { emoji: '🎨', text: 'Matched a paint color perfectly just by looking at a fabric swatch' },
  { emoji: '🌿', text: 'Revived a dying garden with the right soil and fertilizer combo' },
  { emoji: '💡', text: 'Suggested a lighting setup that completely transformed a living room' },
]

function AceHardware() {
  return (
    <div data-aos='fade-down' data-aos-duration='1000' className='space-y-4 md:space-y-6'>
      <BackButton/>
      <ContentComponent
        className='pb-2 border-b border-dashed'
        text={'Ace Hardware'}
        subtitle={'Sales & Customer Service'}
        showCards={false}/>

      {/* Hero */}
      <div className='relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-amber-200/50 dark:border-amber-800/30 group'>
        <img src={aceHardware} title='Ace Hardware' className='w-full aspect-video object-cover'/>
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'/>
        <div className='absolute top-2 md:top-3 left-2 md:left-3 z-10'>
          <span className='px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full bg-amber-500 text-white shadow-md'>Home Improvement</span>
        </div>
        <div className='absolute bottom-2 md:bottom-3 right-2 md:right-3 z-10 flex gap-1'>
          {['🔧', '🎨', '🌱'].map((e, i) => (
            <span key={i} className='text-xs md:text-sm'>{e}</span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3'>
        {highlights.map((h, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -3 }}
            className='p-3 md:p-4 rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm'>
            <div className='inline-flex p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white mb-1.5 md:mb-2 text-xs md:text-sm'>{h.icon}</div>
            <p className='text-[10px] md:text-xs font-semibold text-neutral-800 dark:text-neutral-200'>{h.value} <span className='font-normal text-neutral-500'>{h.title}</span></p>
            <p className='text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed'>{h.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Category Explorer */}
      <div>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-4 flex items-center gap-2'>
          <TbTools className='text-amber-500'/> Category Expertise
        </h3>
        <div className='grid grid-cols-2 gap-2 md:gap-3'>
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className='relative p-3 md:p-4 rounded-xl md:rounded-2xl border border-amber-200/30 dark:border-amber-800/30 bg-gradient-to-br from-white/40 to-amber-50/20 dark:from-neutral-900/50 dark:to-neutral-800/50 backdrop-blur-sm overflow-hidden'>
              <div className={`absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br ${cat.color} opacity-5 rounded-full -mr-6 -mt-6 md:-mr-8 md:-mt-8`}/>
              <div className='relative'>
                <div className={`inline-flex p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br ${cat.color} text-white mb-1.5 md:mb-2 text-xs md:text-sm`}>{cat.icon}</div>
                <p className='text-[11px] md:text-xs font-semibold text-neutral-800 dark:text-neutral-200'>{cat.name}</p>
                <p className='text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed'>{cat.desc}</p>
                <p className='text-[8px] md:text-[9px] text-amber-600 dark:text-amber-400 mt-1 font-medium'>{cat.items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className='p-4 md:p-6 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-amber-50/20 to-orange-50/20 dark:from-neutral-900/40 dark:to-neutral-800/40 backdrop-blur-sm'>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-5 flex items-center gap-2'>
          <TbStars className='text-yellow-500'/> Expertise Breakdown
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3'>
          {skills.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}>
              <div className='flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1'>
                <span className='text-xs md:text-sm'>{s.emoji}</span>
                <span className='text-[10px] md:text-[11px] font-medium text-neutral-700 dark:text-neutral-300'>{s.name}</span>
                <span className='ml-auto text-[8px] md:text-[9px] text-neutral-500'>{s.level}%</span>
              </div>
              <div className='w-full h-1.5 md:h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.08 }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Proud Moments */}
      <div className='p-4 md:p-6 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm'>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-4 flex items-center gap-2'>
          <TbThumbUp className='text-amber-500'/> Proud Moments
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2'>
          {moments.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className='flex items-center gap-2 md:gap-2.5 p-2 md:p-3 rounded-xl bg-white/50 dark:bg-neutral-800/50 border border-amber-200/30 dark:border-amber-800/30'>
              <span className='text-sm md:text-base'>{m.emoji}</span>
              <p className='text-[10px] md:text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed'>{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative p-4 md:p-6 rounded-2xl md:rounded-3xl border border-amber-200/40 dark:border-amber-800/30 bg-gradient-to-br from-amber-50/40 to-orange-50/40 dark:from-neutral-900/50 dark:to-neutral-800/50 backdrop-blur-sm overflow-hidden'>
        <TbQuote className='absolute top-2 md:top-3 right-2 md:right-3 text-2xl md:text-4xl text-amber-300/20 dark:text-amber-600/20'/>
        <p className='text-[11px] md:text-xs text-neutral-600 dark:text-neutral-400 italic leading-relaxed relative z-10'>&ldquo;Every customer had a project. Every project had a dream. I helped bring both to life.&rdquo;</p>
      </motion.div>
    </div>
  )
}

export default AceHardware
