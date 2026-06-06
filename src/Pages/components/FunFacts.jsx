import { motion } from "framer-motion";
import { TbMoodSmile, TbCode, TbWorld, TbBook, TbDeviceGamepad, TbPlane } from "react-icons/tb";

const facts = [
  { icon: <TbCode className="text-xl" />, text: "Started coding at 19 years old, self-taught!" },
  { icon: <TbWorld className="text-xl" />, text: "Speaks 2 languages: Indonesian & English" },
  { icon: <TbBook className="text-xl" />, text: "Reads tech articles every single day" },
  { icon: <TbDeviceGamepad className="text-xl" />, text: "Loves gaming in free time" },
  { icon: <TbPlane className="text-xl" />, text: "Dream: Travel while working remotely" },
  { icon: <TbMoodSmile className="text-xl" />, text: "Believes in lifelong learning" },
];

const FunFacts = () => {
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-6 flex items-center gap-2">
        <span className="text-2xl">🎯</span> Fun Facts About Me
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {facts.map((fact, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm cursor-default duration-300"
          >
            <div className="text-purple-500 dark:text-purple-400 shrink-0">{fact.icon}</div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{fact.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;
