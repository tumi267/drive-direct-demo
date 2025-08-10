import {  NextResponse } from 'next/server'
import { client } from '@/lib/sanityClient'  // your Sanity client instance

export async function POST(request) {
  try {
    const { title, body } = await request.json()

    if (!title || !body) {
      return NextResponse.json({ error: 'Title and body are required' }, { status: 400 })
    }

    // Create a new Sanity document of type "post"
    const newPost = await client.create({
      _type: 'post',
      title,
      body, // you can save the raw HTML string, or convert to Portable Text if needed
      publishedAt: new Date().toISOString(),
    })

    return NextResponse.json({ message: 'Post created', post: newPost })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
