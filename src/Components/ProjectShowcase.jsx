import { useRef } from "react"
import { motion } from "framer-motion"
import { itemCards } from "../data"
import { TbArrowLeft, TbArrowRight } from "react-icons/tb"

const techMap = {
  "Portfolio V3": ["React", "Tailwind", "Framer Motion"],
  "Catatan Belanja": ["React", "Vite", "Tailwind"],
  "Portfolio V2": ["Vite", "React", "CSS"],
  "Giant Experience": ["Retail", "Customer Service"],
  "Indomaret Dashboard": ["Management", "Operations"],
  "Ace Hardware": ["Sales", "Service"],
}

function ProjectShowcase() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 320
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative group">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-neutral-700 shadow-md"
      >
        <TbArrowLeft className="text-sm text-neutral-700 dark:text-neutral-300" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-neutral-700 shadow-md"
      >
        <TbArrowRight className="text-sm text-neutral-700 dark:text-neutral-300" />
      </button>

      {/* Snap Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scrollbar-hide scroll-smooth"
      >
        {itemCards.map((card, idx) => (
          <motion.a
            key={card.id}
            href={card.path}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="snap-start shrink-0 w-[280px] sm:w-[300px] group/card"
          >
            <div className="relative h-40 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-110"
                style={{ backgroundImage: `url(${card.icon})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-sm font-bold text-white drop-shadow-sm">{card.title}</h4>
                <p className="text-[10px] text-white/80 mt-0.5">{card.date}</p>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {(techMap[card.title] || ["React"]).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default ProjectShowcase
