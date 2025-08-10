'use client'
import { useEffect, useState } from 'react'

interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
  }
  body: any
}

export default function Deletepost() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [Dloading, setDLoading] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/blog/getblog')
        if (!res.ok) throw new Error('Failed to fetch posts')
        const data = await res.json()
        setPosts(data)
      } catch (err: any) {
        setError(err.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) return <p className="text-center py-10 text-gray-500 h-[60vh]">Loading posts...</p>
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>
  if (posts.length <= 0) return <p className="text-center py-10 text-gray-400 h-[60vh]">No posts found.</p>
const handleDelete=async(postId:string)=>{
    if (!confirm("Are you sure you want to delete this post?")) return;

    setDLoading(true);

    try {
      const res = await fetch("/api/blog/deletepost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: postId }),
      });

      if (!res.ok) throw new Error("Failed to delete");

      alert("Post deleted successfully!");
      window.location.reload(); // refresh page
    } catch (err) {
      alert("Error deleting post");
      console.error(err);
    } finally {
      setLoading(false);
    }
}
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 h-[90vh]">
      {posts.map((post) => (
        <article key={post._id} className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
          {/* Optional: show published date */}
          <time className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</time>
          <button onClick={()=>{handleDelete(post._id)}}>Delete</button>
        </article>
      ))}
    </div>
  )
}
