import { useState, useEffect, useRef } from 'react'
import { TbSearch, TbX } from "react-icons/tb"
import { Link } from 'react-router-dom'
import { getAllPosts } from '../../lib/blog'

const projectData = [
  { title: 'Portfolio V3', slug: 'latestArticle/PortfolioV3', tag: 'Project', desc: 'React + Tailwind • Full Features' },
  { title: 'Catatan Belanja', slug: 'latestArticle/CatatanBelanja', tag: 'Project', desc: 'Shopping Note • Web App' },
  { title: 'Portfolio V2', slug: 'latestArticle/PortfolioV2', tag: 'Project', desc: 'Vite + React • Responsive' },
  { title: 'Giant Experience', slug: 'experience/Giant', tag: 'Experience', desc: 'Internship • Retail Management' },
  { title: 'Indomaret Experience', slug: 'experience/Indomaret', tag: 'Experience', desc: 'Store Crew - Store Senior Leader' },
  { title: 'Ace Hardware', slug: 'experience/AceHardware', tag: 'Experience', desc: 'Sales & Customer Service' },
  { title: 'AZKO Experience', slug: 'experience/Azko', tag: 'Experience', desc: 'Advisor • Home Improvement' },
]

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const posts = getAllPosts()
  const q = query.toLowerCase().trim()

  const blogResults = q
    ? posts.filter((p) => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q))
    : []

  const projectResults = q
    ? projectData.filter((p) => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
    : []

  const results = [
    ...blogResults.map((r) => ({ ...r, type: 'Blog', link: `/blog/${r.slug}` })),
    ...projectResults.map((r) => ({ ...r, type: r.tag, link: r.slug })),
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-neutral-200 dark:border-neutral-700">
          <TbSearch className="text-neutral-400 text-lg shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari blog, project..."
            className="flex-1 py-3.5 bg-transparent text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 outline-none"
          />
          <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
            <TbX className="text-lg" />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2">
          {query && results.length === 0 && (
            <p className="text-sm text-neutral-400 text-center py-8">Gak nemu hasil buat "{query}"</p>
          )}

          {results.map((r, i) => (
            <Link
              key={`${r.type}-${r.slug}-${i}`}
              to={r.link}
              onClick={onClose}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 mt-0.5">
                {r.type}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 truncate">{r.title}</p>
                {'desc' in r && r.desc && (
                  <p className="text-xs text-neutral-500 truncate">{r.desc}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {!query && (
          <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-xs text-neutral-400 text-center">Ketik sesuatu buat mulai mencari...</p>
          </div>
        )}
      </div>
    </div>
  )
}
