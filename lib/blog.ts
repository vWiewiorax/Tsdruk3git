import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingMinutes: number
}

export interface BlogPost extends BlogPostMeta {
  html: string
}

function readPost(file: string): BlogPost {
  const slug = file.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
  const { data, content } = matter(raw)
  const words = content.trim().split(/\s+/).length
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    tags: data.tags ?? [],
    readingMinutes: Math.max(1, Math.ceil(words / 200)),
    html: marked.parse(content, { async: false }),
  }
}

let cache: BlogPost[] | null = null

function loadPosts() {
  if (!cache) {
    cache = fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith('.md'))
      .map(readPost)
      .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'pl'))
  }
  return cache
}

export function getAllPosts(): BlogPostMeta[] {
  return loadPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    readingMinutes: post.readingMinutes,
  }))
}

export function getPost(slug: string) {
  return loadPosts().find((post) => post.slug === slug)
}

export function getRelatedPosts(post: BlogPostMeta, limit = 3) {
  const others = getAllPosts().filter((p) => p.slug !== post.slug)
  const score = (p: BlogPostMeta) => p.tags.filter((t) => post.tags.includes(t)).length
  return others
    .map((p, i) => ({ p, s: score(p), i }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, limit)
    .map(({ p }) => p)
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })
}
