import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { TbCode, TbCoffee, TbMusic, TbStar, TbHeart, TbBrain } from "react-icons/tb";

const stats = [
  { icon: <TbCode className="text-2xl" />, value: 5, suffix: "+", label: "Years Coding" },
  { icon: <TbCoffee className="text-2xl" />, value: 999, suffix: "+", label: "Cups of Coffee" },
  { icon: <TbMusic className="text-2xl" />, value: 500, suffix: "+", label: "Playlist Created" },
  { icon: <TbBrain className="text-2xl" />, value: 12, suffix: "+", label: "Projects Done" },
  { icon: <TbStar className="text-2xl" />, value: 15, suffix: "+", label: "Happy Clients" },
  { icon: <TbHeart className="text-2xl" />, value: 3, suffix: "+", label: "Years Learning" },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const StatsCounter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:scale-105 duration-300"
        >
          <div className="text-purple-500 dark:text-purple-400">{stat.icon}</div>
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 text-center">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
