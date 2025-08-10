import { NextResponse } from 'next/server'
import { client } from '@/lib/sanityClient'
import { blogPostsQuery } from '../../../../utils/blogqueries'

export async function GET() {
  try {
    const posts = await client.fetch(blogPostsQuery)
    
    return NextResponse.json(posts)
  } catch (error) {
    
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
