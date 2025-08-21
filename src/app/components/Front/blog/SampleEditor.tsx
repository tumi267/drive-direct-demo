'use client'

import { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill')
    const { default: Quill } = await import('quill')
    
    if (typeof window !== 'undefined') {
      (window as unknown as { Quill: typeof Quill }).Quill = Quill
    }
    
    return RQ
  },
  { 
    ssr: false,
    loading: () => <div className="h-[300px] border rounded-lg p-4">Loading editor...</div>
  }
)

export default function SampleEditor() {
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false
    }
  }), [])

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block',
    'list', 'bullet',
    'link', 'image', 'video'
  ]

  if (!mounted) {
    return <div className="h-[300px] border rounded-lg p-4">Loading editor...</div>
  }

  async function handleSubmit() {
    setLoading(true)
    setError(null)
    setSuccess(false)

    if (!title.trim() || !value.trim()) {
      setError('Title and content are required')
      setLoading(false)
      return
    }

    if (!thumbnail) {
      setError('Please upload a thumbnail image')
      setLoading(false)
      return
    }

    try {
      // Step 1 — upload image to Sanity
      const formData = new FormData()
      formData.append('file', thumbnail)

      const uploadRes = await fetch('/api/blog/uploadImage', {
        method: 'POST',
        body: formData
      })

      if (!uploadRes.ok) throw new Error('Image upload failed')
      const { assetId } = await uploadRes.json()

      // Step 2 — create post with thumbnail reference
      const res = await fetch('/api/blog/createpost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title, 
          body: value, 
          mainImage: { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Failed to create post')
      }

      setSuccess(true)
      setTitle('')
      setValue('')
      setThumbnail(null)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Editor</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="mb-4 w-full px-3 py-2 border rounded"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
        className="mb-4 w-full px-3 py-2 border rounded"
      />

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <ReactQuill 
          theme="snow" 
          value={value} 
          onChange={setValue}
          modules={modules}
          formats={formats}
          className="min-h-[300px]"
          placeholder="Write your content here..."
        />
      </div>

      {error && <p className="text-red-600 mt-2">{error}</p>}
      {success && <p className="text-green-600 mt-2">Post created successfully!</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Save Content'}
      </button>
    </div>
  )
}