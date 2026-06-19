import { Helmet } from 'react-helmet-async'
import { motion } from "framer-motion"
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug, getAllPosts } from '../lib/blog'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { TbArrowLeft } from "react-icons/tb"
import NotFound from './NotFound'

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <NotFound />

  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Helmet>
        <title>{post.title} - Arif Rahman Hidayat</title>
        <meta name="description" content={post.content.slice(0, 160)} />
        <meta property="og:title" content={`${post.title} - Arif Rahman Hidayat`} />
        <meta property="og:description" content={post.content.slice(0, 160)} />
      </Helmet>

      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors mb-4"
      >
        <TbArrowLeft className="text-sm" />
        Back to Blog
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-neutral dark:prose-invert max-w-none"
      >
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
              {post.tag}
            </span>
            {post.date && (
              <span className="text-[10px] text-neutral-400">{post.date}</span>
            )}
          </div>
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 m-0">{post.title}</h1>
        </div>

        <div className="markdown-content text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <Markdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </Markdown>
        </div>
      </motion.article>

      <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
        <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Artikel Lainnya</h3>
        <div className="flex flex-wrap gap-2">
          {getAllPosts()
            .filter((p) => p.slug !== slug)
            .slice(0, 3)
            .map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="text-xs px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
              >
                {p.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
