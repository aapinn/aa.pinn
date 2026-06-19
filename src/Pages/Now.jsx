import { Helmet } from 'react-helmet-async'
import { motion } from "framer-motion"
import { TbClock, TbCode, TbBook, TbTarget, TbHeart, TbBriefcase } from "react-icons/tb"

const nowItems = [
  {
    icon: TbBriefcase,
    title: "Working On",
    items: [
      "PT Aspirasi Hidup Indonesia Tbk (AZKO) — Advisor",
      "Mengembangkan fitur baru di portfolio pribadi",
      "Belajar TypeScript lebih dalam"
    ]
  },
  {
    icon: TbCode,
    title: "Learning",
    items: [
      "TypeScript & Advanced React Patterns",
      "Backend dengan Node.js & Express",
      "Database PostgreSQL"
    ]
  },
  {
    icon: TbBook,
    title: "Reading",
    items: [
      "Clean Code — Robert C. Martin",
      "Dokumentasi React & Tailwind"
    ]
  },
  {
    icon: TbTarget,
    title: "Goals",
    items: [
      "Build 3 production-ready projects tahun ini",
      "Meningkatkan personal branding",
      "Kontribusi ke open source"
    ]
  },
  {
    icon: TbHeart,
    title: "Enjoying",
    items: [
      "Ngoding sambil dengerin Lo-Fi",
      "Eksplor framework & tools baru",
      "Quality time sama keluarga"
    ]
  }
]

function Now() {
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Helmet>
        <title>Now - Arif Rahman Hidayat</title>
        <meta name="description" content="Apa yang sedang dikerjakan Arif Rahman Hidayat saat ini — project, belajar, dan goals." />
        <meta property="og:title" content="Now - Arif Rahman Hidayat" />
        <meta property="og:description" content="Apa yang sedang dikerjakan Arif Rahman Hidayat saat ini." />
        <meta property="og:url" content="https://aapinn.vercel.app/now" />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
          <TbClock className="text-purple-500" /> /now
        </h1>
        <p className="text-sm text-neutral-500 mt-1">Apa yang sedang saya kerjakan sekarang</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-900 dark:to-neutral-800 mb-6"
      >
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Terakhir diperbarui: <strong>Juni 2026</strong>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nowItems.map((section, idx) => {
          const Icon = section.icon
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="text-purple-500 text-lg" />
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center py-6 border-t border-neutral-200 dark:border-neutral-700"
      >
        <p className="text-xs text-neutral-400 italic">
          Terinspirasi dari <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">nownownow.com</a>
        </p>
      </motion.div>
    </div>
  )
}

export default Now
