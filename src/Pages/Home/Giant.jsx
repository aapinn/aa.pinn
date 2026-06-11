import { Helmet } from 'react-helmet-async'
import BackButton from '../components/BackButton'
import ContentComponent from '../../Components/Content'
import giant from '../../image/giant.png'
import { motion } from 'framer-motion'
import { TbBuildingStore, TbUsers, TbClock, TbHeart, TbSchool, TbAward, TbMessage, TbStar, TbMoodSmile, TbThumbUp, TbBulb } from 'react-icons/tb'

const timeline = [
  { day: 'Week 1', title: 'The Unknown', desc: 'First day jitters. Learned the layout, met the team, shadowed senior staff.', icon: <TbSchool/>, color: 'from-green-400 to-emerald-500' },
  { day: 'Week 4', title: 'Finding Rhythm', desc: 'Could navigate the store blindfolded. Started handling customer questions alone.', icon: <TbMoodSmile/>, color: 'from-emerald-400 to-teal-500' },
  { day: 'Month 3', title: 'Going Solo', desc: 'Managed entire sections independently. Became the go-to person for new interns.', icon: <TbThumbUp/>, color: 'from-teal-400 to-cyan-500' },
  { day: 'The End', title: 'A Foundation Built', desc: 'Left with confidence, discipline, and a love for helping people.', icon: <TbAward/>, color: 'from-cyan-400 to-blue-500' },
]

const skills = ['Customer Service', 'Teamwork', 'Discipline', 'Communication', 'Problem Solving', 'Adaptability', 'Patience', 'Work Ethic']

const memories = [
  { emoji: '👋', text: 'Greeting every customer who walked through the door' },
  { emoji: '📦', text: 'Mastering the art of shelf restocking during rush hour' },
  { emoji: '💬', text: 'Learning to stay calm when customers were stressed' },
  { emoji: '🤝', text: 'Team huddles that turned coworkers into friends' },
]

function Giant() {
  return (
    <div data-aos='fade-down' data-aos-duration='1000' className='space-y-4 md:space-y-6'>
      <Helmet>
        <title>Giant Experience - Arif Rahman Hidayat</title>
        <meta name="description" content="Pengalaman internship Arif Rahman Hidayat di Giant Supermarket - awal karir di dunia retail dan customer service." />
        <meta property="og:title" content="Giant Experience - Arif Rahman Hidayat" />
        <meta property="og:description" content="Pengalaman internship Arif Rahman Hidayat di Giant Supermarket." />
      </Helmet>
      <BackButton/>
      <ContentComponent
        className='pb-2 border-b border-dashed'
        text={'Giant Experience'}
        subtitle={'Internship • Retail Management'}
        showCards={false}/>

      {/* Photo Album Card */}
      <div className='relative p-2 md:p-3 pb-4 md:pb-6 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700'>
        <div className='absolute -top-1 -right-1 md:-top-2 md:-right-2 w-8 md:w-12 h-8 md:h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs md:text-sm font-bold shadow-lg rotate-12'>1st</div>
        <img src={giant} title='Giant' className='w-full aspect-video rounded-xl md:rounded-2xl bg-cover bg-black'/>
        <p className='text-center text-[9px] md:text-[10px] text-neutral-400 mt-1.5 md:mt-2 font-geist'>📍 Giant Supermarket — The internship that started it all</p>
      </div>

      {/* Quick Stats */}
      <div className='grid grid-cols-3 gap-2 md:gap-3'>
        {[
          { value: 'Intern', label: 'Position', icon: <TbSchool/>, gradient: 'from-green-400 to-emerald-500' },
          { value: '2018', label: 'The Year', icon: <TbClock/>, gradient: 'from-emerald-400 to-teal-500' },
          { value: '#1', label: 'First Job', icon: <TbStar/>, gradient: 'from-teal-400 to-cyan-500' },
        ].map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className='p-3 md:p-4 rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center'>
            <div className={`inline-flex p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br ${s.gradient} text-white mb-1 md:mb-1.5 text-xs md:text-sm`}>{s.icon}</div>
            <p className='text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-100'>{s.value}</p>
            <p className='text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400'>{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-4 flex items-center gap-2'>
          <TbClock className='text-green-500'/> The Internship Journey
        </h3>
        <div className='relative'>
          <div className='absolute left-[11px] md:left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-green-400 to-blue-400'/>
          {timeline.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='flex items-start gap-3 md:gap-4 mb-4 md:mb-5 last:mb-0 relative'>
              <div className={`relative z-10 p-1.5 md:p-2 rounded-full bg-gradient-to-br ${t.color} text-white text-[10px] md:text-xs shadow-sm shrink-0`}>{t.icon}</div>
              <div className='flex-1 p-3 md:p-4 rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-white/50 to-neutral-50/50 dark:from-neutral-900/50 dark:to-neutral-800/50 backdrop-blur-sm hover:border-green-300 dark:hover:border-green-700 duration-300'>
                <div className='flex items-center gap-2 mb-1'>
                  <span className='text-[9px] md:text-[10px] font-mono font-bold text-green-500'>{t.day}</span>
                  <span className='text-[11px] md:text-xs font-semibold text-neutral-800 dark:text-neutral-200'>{t.title}</span>
                </div>
                <p className='text-[10px] md:text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed'>{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

       {/* Skill Tags */}
      <div>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-4 flex items-center gap-2'>
          <TbBulb className='text-amber-500'/> Skills Gained
        </h3>
        <div className='flex flex-wrap gap-1.5 md:gap-2'>
          {skills.map((s, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className='px-2.5 md:px-3 py-1 md:py-1.5 text-[9px] md:text-[10px] font-medium rounded-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-neutral-800 dark:to-neutral-700 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/50'>{s}</motion.span>
          ))}
        </div>
      </div>

      {/* Memory Lane */}
      <div className='p-3 md:p-5 rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-green-50/30 to-emerald-50/30 dark:from-neutral-900/40 dark:to-neutral-800/40 backdrop-blur-sm'>
        <h3 className='text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-4 flex items-center gap-2'>
          <TbHeart className='text-rose-500'/> Memory Lane
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2'>
          {memories.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className='flex items-center gap-2 md:gap-2.5 p-2 md:p-3 rounded-xl bg-white/50 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50'>
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
        className='text-center p-4 md:p-5 rounded-2xl md:rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900'>
        <p className='text-[11px] md:text-xs text-neutral-300 italic leading-relaxed'>&ldquo;It was just an internship — but it laid the foundation for everything I built after.&rdquo;</p>
      </motion.div>
    </div>
  )
}

export default Giant
