import { motion } from "framer-motion"
import CardComponent from "../Pages/components/CardComponent"
import { itemCards } from "../data"

function DragCarousel() {
  const duplicated = [...itemCards, ...itemCards, ...itemCards]

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((card, i) => (
            <div key={i} className="w-72 shrink-0 p-2 select-none">
              <CardComponent cards={[card]} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DragCarousel
