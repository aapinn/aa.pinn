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

const UsesSection = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <TbTools className="text-lg text-neutral-700 dark:text-neutral-300" />
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Uses</h3>
        <span className="text-xs text-neutral-400 ml-auto">Tools & gear sehari-hari</span>
      </div>
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
                <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{cat.title}</h4>
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
    </div>
  )
}

export default UsesSection
