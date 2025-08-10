'use client'

import { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill')
    const { default: Quill } = await import('quill')
    
    if (typeof window !== 'undefined') {
      // Type assertion here to satisfy TypeScript
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
  const [mounted, setMounted] = useState(false)

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
      ['link', 'image'],
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
    'link', 'image'
  ]

  if (!mounted) {
    return <div className="h-[300px] border rounded-lg p-4">Loading editor...</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Editor</h1>
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
      <button
        onClick={() => console.log(value)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Save Content
      </button>
    </div>
  )
}
