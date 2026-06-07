import { useState } from "react"
import { motion } from "framer-motion"
import { TbHeart, TbMessageCircle, TbSend, TbBookmark, TbDots, TbBrandInstagram, TbBrandFacebook, TbBrandTiktok } from "react-icons/tb"
import logo from "../image/LogoBrand.png"
import portfolioV3 from "../image/portfolioV3.png"
import catatanBelanja from "../image/catatanBelanja.png"
import enterprise from "../image/enterprise.jpg"
import pink from "../image/pink.png"

const socials = [
  { key: "facebook", label: "Facebook", icon: TbBrandFacebook, url: "https://www.facebook.com/avenged.arifsevenfold", color: "text-blue-600" },
  { key: "instagram", label: "Instagram", icon: TbBrandInstagram, url: "https://www.instagram.com/aaa.pinnn/", color: "text-pink-500" },
  { key: "tiktok", label: "TikTok", icon: TbBrandTiktok, url: "https://www.tiktok.com/@arifpake.ef", color: "text-neutral-800 dark:text-neutral-200" },
]

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
  const [socialTab, setSocialTab] = useState("facebook")

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div data-aos="fade-down" data-aos-duration="1000" className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">Blog</h1>

      {/* Social Media Embed */}
      <div className="mb-8 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm">
        {/* Tabs */}
        <div className="flex border-b border-neutral-200 dark:border-neutral-700">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.key}
                onClick={() => setSocialTab(s.key)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                  socialTab === s.key
                    ? "border-b-2 border-purple-500 text-purple-600 dark:text-purple-400"
                    : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                }`}
              >
                <Icon className={`text-base ${s.color}`} />
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            )
          })}
        </div>

        {/* Facebook Embed */}
        {socialTab === "facebook" && (
          <div className="p-4 flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/avenged.arifsevenfold&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="500"
              style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Page"
            />
          </div>
        )}

        {/* Instagram Embed */}
        {socialTab === "instagram" && (
          <div className="p-6 flex flex-col items-center gap-4 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
              <img src={logo} alt="" className="w-full h-full rounded-full object-cover border-2 border-white" />
            </div>
            <div>
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">aaa.pinnn</p>
              <p className="text-sm text-neutral-500">Arif Rahman</p>
            </div>
            <a
              href="https://www.instagram.com/aaa.pinnn/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
            >
              Follow @aaa.pinnn
            </a>
            <p className="text-xs text-neutral-500">
              Klik tombol di atas untuk buka Instagram
            </p>
          </div>
        )}

        {/* TikTok Embed */}
        {socialTab === "tiktok" && (
          <div className="p-6 flex flex-col items-center gap-4 text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-200 dark:bg-neutral-700 p-0.5">
              <img src={logo} alt="" className="w-full h-full rounded-full object-cover border-2 border-white" />
            </div>
            <div>
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">@arifpake.ef</p>
              <p className="text-sm text-neutral-500">Arif Rahman</p>
            </div>
            <a
              href="https://www.tiktok.com/@arifpake.ef"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-neutral-800 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium transition-colors hover:opacity-80"
            >
              Follow @arifpake.ef
            </a>
            <p className="text-xs text-neutral-500">
              Klik tombol di atas untuk buka TikTok
            </p>
          </div>
        )}
      </div>

      {/* Feed Posts */}
      <h2 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Latest Updates</h2>
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
