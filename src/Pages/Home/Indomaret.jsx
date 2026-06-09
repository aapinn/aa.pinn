import React from 'react'
import BackButton from '../components/BackButton'
import ContentComponent from '../../Components/Content'
import indomaret from '../../image/indomaret.png'
import { motion } from 'framer-motion'
import { TbTrendingUp, TbUsers, TbCalendar, TbAward, TbChartLine, TbCrown, TbMedal, TbArrowUpRight, TbBriefcase, TbHeart, TbBook, TbSparkles, TbFlame } from 'react-icons/tb'

const stats = [
  { value: '5', suffix: ' Years', label: 'Of Service', icon: <TbCalendar/>, gradient: 'from-blue-500 to-cyan-500', desc: '2020 — 2024' },
  { value: '3', suffix: '', label: 'Promotions', icon: <TbArrowUpRight/>, gradient: 'from-cyan-500 to-teal-500', desc: 'Crew → Senior → Leader' },
  { value: '10', suffix: '+', label: 'Team Led', icon: <TbUsers/>, gradient: 'from-teal-500 to-emerald-500', desc: 'Crew members mentored' },
  { value: '5K', suffix: '+', label: 'Transactions', icon: <TbBriefcase/>, gradient: 'from-emerald-500 to-green-500', desc: 'Handled per month avg' },
]

const ladder = [
  { role: 'Store Crew Junior', period: '2020', desc: 'Mastered the fundamentals — cashier, stocking, customer service, store cleanliness.', icon: <TbMedal/>, gradient: 'from-blue-400 to-sky-500' },
  { role: 'Store Crew Senior', period: '2021-2022', desc: 'Trained new hires, managed inventory, handled higher-level customer escalations.', icon: <TbChartLine/>, gradient: 'from-sky-400 to-cyan-500' },
  { role: 'Store Senior Leader', period: '2022-2024', desc: 'Full operational ownership — scheduling, reporting, cash management, team leadership.', icon: <TbCrown/>, gradient: 'from-cyan-400 to-teal-500' },
]

const achievements = [
  { text: 'Managed end-to-end store operations independently', icon: '🏆' },
  { text: 'Mentored 5+ crew members from zero to fully capable', icon: '👥' },
  { text: 'Zero inventory discrepancy for 6 consecutive months', icon: '📊' },
  { text: 'Exceeded sales targets during 3 peak season periods', icon: '📈' },
  { text: 'Recognized for exceptional leadership during store audits', icon: '⭐' },
]

const growth = [
  { icon: <TbBook/>, label: 'Knowledge', from: 'Store basics', to: 'Full operations', level: 95 },
  { icon: <TbUsers/>, label: 'Leadership', from: 'Following orders', to: 'Leading teams', level: 88 },
  { icon: <TbHeart/>, label: 'Confidence', from: 'Shy crew', to: 'Decision maker', level: 92 },
  { icon: <TbFlame/>, label: 'Resilience', from: 'Easily stressed', to: 'Pressure proof', level: 90 },
]

function Indomaret() {
  return (
    <div data-aos='fade-down' data-aos-duration='1000' className='space-y-5 md:space-y-7'>
      <BackButton/>
      <ContentComponent
        className='pb-2 border-b border-dashed'
        text={'Indomaret Experience'}
        subtitle={'Store Crew Junior - Senior Leader'}
        showCards={false}/>

      {/* Hero Image */}
      <div className='relative overflow-hidden rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700'>
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className='absolute -top-1.5 -right-1.5 md:-top-2.5 md:-right-2.5 z-20 p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg'>
          <TbSparkles className='text-sm md:text-lg'/>
        </motion.div>
        <img src={indomaret} title='Indomaret' className='w-full aspect-video object-cover'/>
        <div className='absolute bottom-1.5 md:bottom-3 left-1.5 md:left-3 z-10'>
          <span className='px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-semibold rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-neutral-800 dark:text-neutral-200 shadow-sm'>5 Year Journey</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
        {stats.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className='p-4 md:p-5 rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center'>
            <div className={`inline-flex p-2 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-br ${s.gradient} text-white mb-2 md:mb-3 text-sm md:text-base`}>{s.icon}</div>
            <p className='text-lg md:text-2xl font-bold text-neutral-800 dark:text-neutral-100'>{s.value}<span className='text-[10px] md:text-xs font-normal text-neutral-500'>{s.suffix}</span></p>
            <p className='text-[10px] md:text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-1'>{s.label}</p>
            <p className='text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5'>{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Career Growth */}
      <div>
        <h3 className='text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-200 mb-4 md:mb-5 flex items-center gap-2'>
          <TbTrendingUp className='text-blue-500'/> Career Growth
        </h3>
        <div className='relative'>
          {ladder.map((rung, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className='flex items-start gap-4 md:gap-5 pb-6 md:pb-8 last:pb-0 relative'>
              {idx < ladder.length - 1 && (
                <div className='absolute left-[15px] md:left-[18px] top-[15px] md:top-[18px] -bottom-[15px] md:-bottom-[18px] w-[2px] bg-gradient-to-b from-blue-400 to-cyan-400'/>
              )}
              <div className={`relative z-10 p-2 md:p-2.5 rounded-xl md:rounded-2xl bg-gradient-to-br ${rung.gradient} text-white shadow-md shrink-0 text-sm md:text-base`}>{rung.icon}</div>
              <div className='flex-1 p-4 md:p-5 rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-white/40 to-neutral-50/40 dark:from-neutral-900/40 dark:to-neutral-800/40 backdrop-blur-sm hover:border-blue-300 dark:hover:border-blue-700 duration-300'>
                <div className='flex items-center justify-between flex-wrap gap-2 mb-1.5'>
                  <p className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200'>{rung.role}</p>
                  <span className='text-[9px] md:text-[10px] text-neutral-500 font-mono bg-neutral-100 dark:bg-neutral-800 px-2 md:px-3 py-0.5 rounded'>{rung.period}</span>
                </div>
                <p className='text-[11px] md:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed'>{rung.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personal Growth */}
      <div className='p-5 md:p-7 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-blue-50/20 to-cyan-50/20 dark:from-neutral-900/40 dark:to-neutral-800/40 backdrop-blur-sm'>
        <h3 className='text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-200 mb-4 md:mb-6 flex items-center gap-2'>
          <TbFlame className='text-orange-500'/> Personal Growth
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
          {growth.map((g, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}>
              <div className='flex items-center gap-2 mb-1.5 md:mb-2'>
                <span className='text-blue-500 text-sm md:text-base'>{g.icon}</span>
                <span className='text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-300'>{g.label}</span>
                <span className='ml-auto text-[10px] md:text-xs text-neutral-500'>{g.level}%</span>
              </div>
              <div className='flex justify-between text-[9px] md:text-[10px] text-neutral-400 mb-1'>
                <span>{g.from}</span>
                <span>{g.to}</span>
              </div>
              <div className='w-full h-2 md:h-2.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${g.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.1 }}
                  className='h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500'/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Achievements */}
      <div className='p-5 md:p-7 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm'>
        <h3 className='text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-200 mb-4 md:mb-5 flex items-center gap-2'>
          <TbAward className='text-amber-500'/> Key Achievements
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3'>
          {achievements.map((a, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className='flex items-center gap-3 md:gap-3.5 p-3 md:p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50'>
              <span className='text-sm md:text-base shrink-0'>{a.icon}</span>
              <p className='text-[11px] md:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed'>{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900 p-5 md:p-7'>
        <div className='absolute top-0 right-0 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl'/>
        <p className='text-xs md:text-sm text-neutral-300 italic leading-relaxed relative z-10'>&ldquo;Walked in as a crew member, walked out as a leader. 5 years, 3 promotions, countless memories.&rdquo;</p>
      </motion.div>
    </div>
  )
}

export default Indomaret
