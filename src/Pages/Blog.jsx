import { Helmet } from 'react-helmet-async'
import { motion } from "framer-motion"
import { TbCode } from "react-icons/tb"
import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/blog'

const posts = getAllPosts()

const bgColors = [
  "from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800",
  "from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800",
  "from-yellow-500/10 to-orange-500/10 border-yellow-200 dark:border-yellow-800",
  "from-green-500/10 to-teal-500/10 border-green-200 dark:border-green-800",
  "from-pink-500/10 to-rose-500/10 border-pink-200 dark:border-pink-800",
  "from-indigo-500/10 to-purple-500/10 border-indigo-200 dark:border-indigo-800",
]

function Blog() {
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Helmet>
        <title>Blog & Notes - Arif Rahman Hidayat</title>
        <meta name="description" content="Blog dan catatan perjalanan Arif Rahman Hidayat dalam dunia coding. Tips, cerita, dan pembelajaran seputar web development." />
        <meta property="og:title" content="Blog & Notes - Arif Rahman Hidayat" />
        <meta property="og:description" content="Blog dan catatan perjalanan Arif Rahman Hidayat dalam dunia coding." />
        <meta property="og:url" content="https://aapinn.vercel.app/blog" />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">Catatan</h1>
        <p className="text-sm text-neutral-500 my-3">Cerita, tips, dan pembelajaran sepanjang perjalanan</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900 p-6 mb-8"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="relative">
          <TbCode className="text-3xl text-purple-400 mb-3" />
          <h2 className="text-lg font-bold text-white mb-2">Selamat Datang di Catatan Saya</h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
            Halaman ini berisi catatan-catatan ringan seputar perjalanan saya di dunia coding.
            Kadang serius, kadang random — tapi semoga bisa jadi inspirasi buat yang lagi belajar.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post, idx) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative p-5 rounded-2xl border bg-gradient-to-br ${bgColors[idx % bgColors.length]} backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative">
                <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {post.tag}
                </span>
                {post.date && (
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 ml-2">{post.date}</span>
                )}
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-2">{post.title}</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5 line-clamp-2">{post.content.replace(/[#*`\[\]]/g, '').trim().slice(0, 120)}...</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center py-6 border-t border-neutral-200 dark:border-neutral-700"
      >
        <p className="text-sm text-neutral-500 italic">
          "Kode yang kamu tulis hari ini adalah pondasi untuk masa depanmu."
        </p>
        <p className="text-xs text-neutral-400 mt-2">— Arif Rahman</p>
      </motion.div>
    </div>
  )
}

export default Blog
