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

const NowSection = () => {
  return (
    <div className="border-t mt-8 pt-6">
      <div className="flex items-center gap-2 mb-4">
        <TbClock className="text-lg text-neutral-700 dark:text-neutral-300" />
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Now</h3>
        <span className="text-xs text-neutral-400 ml-auto">Terakhir diperbarui: Juni 2026</span>
      </div>
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
                <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{section.title}</h4>
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
    </div>
  )
}

export default NowSection
