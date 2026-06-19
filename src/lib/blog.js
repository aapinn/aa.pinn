const posts = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { frontmatter: {}, content: raw }

  const frontmatter = {}
  match[1].split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':')
    if (key && rest.length) {
      frontmatter[key.trim()] = rest.join(':').trim()
    }
  })
  return { frontmatter, content: match[2] }
}

const colorMap = {
  'purple-pink': 'from-purple-500 to-pink-500',
  'blue-cyan': 'from-blue-500 to-cyan-500',
  'yellow-orange': 'from-yellow-500 to-orange-500',
  'green-teal': 'from-green-500 to-teal-500',
  'pink-rose': 'from-pink-500 to-rose-500',
  'indigo-purple': 'from-indigo-500 to-purple-500',
}

export function getAllPosts() {
  return Object.entries(posts)
    .map(([filepath, raw]) => {
      const slug = filepath.split('/').pop().replace('.md', '')
      const { frontmatter, content } = parseFrontmatter(raw)
      return {
        slug,
        title: frontmatter.title || slug,
        tag: frontmatter.tag || 'Uncategorized',
        date: frontmatter.date || '',
        gradient: colorMap[frontmatter.color] || 'from-neutral-500 to-neutral-600',
        content,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug) || null
}
