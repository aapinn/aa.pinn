import { motion } from "framer-motion"
import CardComponent from "../Pages/components/CardComponent"
import { itemCards } from "../data"

function DragCarousel() {
  return (
    <motion.div
      className="cursor-grab overflow-hidden w-full"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex overflow-x-auto scroll-smooth scrollbar-hide" // ✅ smooth scroll + hide scrollbar
        animate={{
          x: [0, -20, 0], // gerakan ketarik ke kiri 20px lalu balik
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      >
        {itemCards.map((card, i) => (
          <div key={i} className="w-72 shrink-0 p-2">
            <CardComponent cards={[card]} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default DragCarousel
