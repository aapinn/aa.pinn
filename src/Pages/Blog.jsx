import { useState } from "react"
import { motion } from "framer-motion"
import { TbHeart, TbMessageCircle, TbSend, TbBookmark, TbDots } from "react-icons/tb"
import logo from "../image/LogoBrand.png"
import portfolioV3 from "../image/portfolioV3.png"
import catatanBelanja from "../image/catatanBelanja.png"
import enterprise from "../image/enterprise.jpg"
import pink from "../image/pink.png"

const posts = [
  {
    id: 1,
    user: "Arif Rahman",
    handle: "@aa.pinn",
    avatar: logo,
    image: portfolioV3,
    caption: "Just launched my new portfolio v3! Built with React + Tailwind + Framer Motion. Super happy with how it turned out 🚀",
    likes: 142,
    comments: 12,
    time: "2 jam yang lalu",
  },
  {
    id: 2,
    user: "Arif Rahman",
    handle: "@aa.pinn",
    avatar: logo,
    image: catatanBelanja,
    caption: "Catatan Belanja app is live! Now you can track your shopping easily. Cek di link di bio ya! 📝",
    likes: 89,
    comments: 5,
    time: "5 jam yang lalu",
  },
  {
    id: 3,
    user: "Arif Rahman",
    handle: "@aa.pinn",
    avatar: logo,
    image: enterprise,
    caption: "Another day, another code. Always learning and building something new. 💻✨",
    likes: 256,
    comments: 23,
    time: "1 hari yang lalu",
  },
  {
    id: 4,
    user: "Arif Rahman",
    handle: "@aa.pinn",
    avatar: logo,
    image: pink,
    caption: "Sometimes you just need to step back and appreciate the little things. 🌅",
    likes: 310,
    comments: 18,
    time: "3 hari yang lalu",
  },
]

function Blog() {
  const [liked, setLiked] = useState({})

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div data-aos="fade-down" data-aos-duration="1000" className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">Blog</h1>

      <div className="flex flex-col gap-6">
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <img src={post.avatar} alt="" className="w-9 h-9 rounded-full object-cover border border-neutral-300 dark:border-neutral-600" />
                <div>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{post.user}</p>
                  <p className="text-[11px] text-neutral-500">{post.handle}</p>
                </div>
              </div>
              <TbDots className="text-neutral-500 text-lg" />
            </div>

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt=""
                className="w-full aspect-square object-cover border-y border-neutral-200 dark:border-neutral-700"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-4 pt-3">
              <div className="flex items-center gap-4">
                <button onClick={() => toggleLike(post.id)} className="transition-colors">
                  <TbHeart
                    className={`text-xl ${liked[post.id] ? "text-red-500 fill-red-500" : "text-neutral-700 dark:text-neutral-300"} transition-all duration-200`}
                  />
                </button>
                <TbMessageCircle className="text-xl text-neutral-700 dark:text-neutral-300" />
                <TbSend className="text-xl text-neutral-700 dark:text-neutral-300" />
              </div>
              <TbBookmark className="text-xl text-neutral-700 dark:text-neutral-300" />
            </div>

            {/* Likes */}
            <div className="px-4 pt-2">
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                {post.likes + (liked[post.id] ? 1 : 0)} likes
              </p>
            </div>

            {/* Caption */}
            <div className="px-4 pt-1 pb-2">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{post.user}</span>{" "}
                {post.caption}
              </p>
            </div>

            {/* Comments & Time */}
            <div className="px-4 pb-3">
              <p className="text-xs text-neutral-500">Lihat semua {post.comments} komentar</p>
              <p className="text-[10px] text-neutral-400 mt-1">{post.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Blog
