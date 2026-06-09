import React from 'react'
import BackButton from '../components/BackButton'
import ContentComponent from '../../Components/Content'
import azko from '../../image/azko.png'
import { motion } from 'framer-motion'
import { TbBuildingStore, TbUsers, TbHeart, TbStar, TbBulb, TbRocket, TbQuote, TbTrendingUp, TbAward, TbThumbUp, TbHome, TbTools } from 'react-icons/tb'

const highlights = [
  { icon: <TbBuildingStore className='text-base md:text-lg'/>, title: 'Advisor', desc: 'Helped customers find the perfect home & living solutions', gradient: 'from-emerald-400 to-teal-500' },
  { icon: <TbUsers className='text-base md:text-lg'/>, title: 'Consultative', desc: 'Listened first, recommended second — every time', gradient: 'from-teal-400 to-cyan-500' },
  { icon: <TbHeart className='text-base md:text-lg'/>, title: 'Trusted', desc: 'Built lasting relationships with repeat customers', gradient: 'from-cyan-400 to-blue-500' },
  { icon: <TbStar className='text-base md:text-lg'/>, title: 'Product Expert', desc: 'Mastered 1000+ products across home categories', gradient: 'from-blue-400 to-indigo-500' },
]

const categories = [
  { emoji: '🛋️', name: 'Furniture', desc: 'Sofas, tables, chairs, storage — home essentials' },
  { emoji: '🔧', name: 'Tools', desc: 'Power tools, hand tools, hardware supplies' },
  { emoji: '💡', name: 'Lighting', desc: 'Lamps, bulbs, fixtures for every room' },
  { emoji: '🍳', name: 'Kitchen', desc: 'Cookware, appliances, dining essentials' },
  { emoji: '🧴', name: 'Living', desc: 'Home decor, cleaning, organization' },
  { emoji: '🌿', name: 'Outdoor', desc: 'Gardening, patio, outdoor living' },
]

const achievements = [
  { emoji: '🏆', text: 'Consistently top-rated advisor for customer satisfaction' },
  { emoji: '📈', text: 'Exceeded monthly sales targets through consultative approach' },
  { emoji: '👥', text: 'Built a loyal customer base who returned asking for me by name' },
  { emoji: '🧠', text: 'Became go-to product expert across multiple home categories' },
]

function Azko() {
  return (
    <div data-aos='fade-down' data-aos-duration='1000' className='space-y-4 md:space-y-6'>
      <BackButton/>
      <ContentComponent
        className='pb-2 border-b border-dashed'
        text={'AZKO Experience'}
        subtitle={'Advisor • Home Improvement'}
        showCards={false}/>

      {/* Hero */}
      <div className='relative overflow-hidden rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 group'>
        <img src={azko} title='AZKO' className='w-full aspect-video object-cover'/>
        <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'/>
        <div className='absolute top-2 md:top-3 left-2 md:left-3 z-10'>
          <span className='px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-semibold rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-neutral-800 dark:text-neutral-200 shadow-sm'>PT Aspirasi Hidup Indonesia Tbk</span>
        </div>
        <div className='absolute bottom-2 md:bottom-3 right-2 md:right-3 z-10'>
          <span className='px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm'>Home & Living Solutions</span>
        </div>
      </div>

      {/* Highlights */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3'>
        {highlights.map((h, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -3 }}
            className='p-3 md:p-4 rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm'>
            <div className={`inline-flex p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br ${h.gradient} text-white mb-1.5 md:mb-2 text-xs md:text-sm`}>{h.icon}</div>
            <p className='text-[11px] md:text-xs font-semibold text-neutral-800 dark:text-neutral-200'>{h.title}</p>
            <p className='text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed'>{h.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* About AZKO */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='p-4 md:p-6 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-emerald-50/20 to-teal-50/20 dark:from-neutral-900/40 dark:to-neutral-800/40 backdrop-blur-sm'>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2 md:mb-3 flex items-center gap-2'>
          <TbHome className='text-emerald-500'/> About AZKO
        </h3>
        <p className='text-[10px] md:text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed'>
          AZKO is a home improvement and living solutions retailer under <span className='font-medium text-neutral-800 dark:text-neutral-200'>PT Aspirasi Hidup Indonesia Tbk</span> — a trusted Indonesian company with over 30 years of legacy. With 250+ stores and 43,000+ products, AZKO provides everything from furniture and tools to lighting, kitchenware, and outdoor essentials.
        </p>
        <p className='text-[10px] md:text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2'>
          As an <span className='font-medium text-neutral-800 dark:text-neutral-200'>Advisor</span>, I helped customers navigate this vast catalog — listening to their needs, recommending the right solutions, and ensuring every visit ended with a smile.
        </p>
      </motion.div>

      {/* Categories */}
      <div>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-4 flex items-center gap-2'>
          <TbTools className='text-emerald-500'/> Product Categories
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3'>
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -2 }}
              className='p-3 md:p-4 rounded-xl md:rounded-2xl border border-emerald-200/30 dark:border-emerald-800/30 bg-gradient-to-br from-white/40 to-emerald-50/20 dark:from-neutral-900/40 dark:to-neutral-800/40 backdrop-blur-sm'>
              <p className='text-base md:text-lg mb-1'>{cat.emoji}</p>
              <p className='text-[11px] md:text-xs font-semibold text-neutral-800 dark:text-neutral-200'>{cat.name}</p>
              <p className='text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5'>{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className='p-4 md:p-6 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm'>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-4 flex items-center gap-2'>
          <TbAward className='text-amber-500'/> Key Achievements
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2'>
          {achievements.map((a, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className='flex items-center gap-2 md:gap-2.5 p-2 md:p-3 rounded-xl bg-white/50 dark:bg-neutral-800/50 border border-emerald-200/30 dark:border-emerald-800/30'>
              <span className='text-xs md:text-sm'>{a.emoji}</span>
              <p className='text-[10px] md:text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed'>{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900 p-4 md:p-6'>
        <div className='absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'/>
        <TbQuote className='absolute bottom-2 md:bottom-3 right-2 md:right-3 text-2xl md:text-4xl text-white/5'/>
        <div className='relative z-10'>
          <p className='text-[11px] md:text-xs text-neutral-300 italic leading-relaxed'>&ldquo;Being an Advisor at AZKO taught me that the best solutions come from truly listening. Home is where the heart is — and I helped make it better, one recommendation at a time.&rdquo;</p>
          <a href='https://azko.id/' target='_blank' className='inline-block mt-3 text-[9px] md:text-[10px] text-emerald-400 hover:text-emerald-300 duration-300'>azko.id →</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Azko
