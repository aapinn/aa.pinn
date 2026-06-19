import { Helmet } from 'react-helmet-async'
import { motion } from "framer-motion"
import { TbDeviceLaptop, TbTools, TbCode, TbMouse, TbHeadphones, TbHeart } from "react-icons/tb"

const usesCategories = [
  {
    icon: TbDeviceLaptop,
    title: "Hardware",
    items: [
      { label: "Laptop", value: "ASUS VivoBook 15 (Intel i5, 8GB RAM)" },
      { label: "Monitor", value: "Built-in 15.6\"" },
      { label: "Mouse", value: "Logitech M235" },
      { label: "Keyboard", value: "Laptop keyboard built-in" },
      { label: "Headphones", value: "TWS Bluetooth" },
    ]
  },
  {
    icon: TbCode,
    title: "Code Editor & Terminal",
    items: [
      { label: "Editor", value: "VS Code" },
      { label: "Theme", value: "One Dark Pro" },
      { label: "Font", value: "Fira Code / JetBrains Mono" },
      { label: "Terminal", value: "Git Bash + PowerShell" },
    ]
  },
  {
    icon: TbTools,
    title: "Frontend",
    items: [
      { label: "Framework", value: "React + Vite" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Animation", value: "Framer Motion, AOS" },
      { label: "Icons", value: "Tabler Icons, React Icons" },
    ]
  },
  {
    icon: TbMouse,
    title: "Design & Tools",
    items: [
      { label: "Design", value: "Figma (basic)" },
      { label: "Version Control", value: "Git + GitHub" },
      { label: "Deployment", value: "Vercel" },
      { label: "Image Editing", value: "Canva" },
    ]
  },
  {
    icon: TbHeadphones,
    title: "Productivity",
    items: [
      { label: "Music", value: "Lo-Fi / Instrumental on YouTube" },
      { label: "Browser", value: "Chrome / Edge" },
      { label: "Notes", value: "Google Keep, Notion" },
      { label: "Communication", value: "WhatsApp, Discord" },
    ]
  },
  {
    icon: TbHeart,
    title: "Daily Carry",
    items: [
      { label: "Smartphone", value: "Android" },
      { label: "Backpack", value: "Random lokal brand" },
      { label: "Notebook", value: "Buku catatan fisik" },
    ]
  }
]

function Uses() {
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Helmet>
        <title>Uses - Arif Rahman Hidayat</title>
        <meta name="description" content="Tools, gear, dan software yang digunakan Arif Rahman Hidayat sehari-hari." />
        <meta property="og:title" content="Uses - Arif Rahman Hidayat" />
        <meta property="og:description" content="Tools, gear, dan software yang digunakan Arif Rahman Hidayat sehari-hari." />
        <meta property="og:url" content="https://aapinn.vercel.app/uses" />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
          <TbTools className="text-purple-500" /> /uses
        </h1>
        <p className="text-sm text-neutral-500 mt-1">Tools, gear, dan software yang saya pakai</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-900 dark:to-neutral-800 mb-6"
      >
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Ini adalah tools dan gear yang saya pakai sehari-hari untuk coding, desain, dan produktivitas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {usesCategories.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-700">
                <Icon className="text-purple-500 text-lg" />
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{cat.title}</h3>
              </div>
              <div className="space-y-2.5">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-3">
                    <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 min-w-[80px]">{item.label}</span>
                    <span className="text-xs text-neutral-800 dark:text-neutral-200 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
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
          Terinspirasi dari <a href="https://uses.tech" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">uses.tech</a>
        </p>
      </motion.div>
    </div>
  )
}

export default Uses
