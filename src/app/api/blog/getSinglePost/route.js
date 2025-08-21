import { NextResponse } from 'next/server';
import { client } from '@/lib/sanityClient';
import { blogPostByIdQuery } from '@/utils/blogqueries';

// API Route: /api/post
export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing post id' }, { status: 400 });
    }

    // ✅ use query + variables
    const post = await client.fetch(blogPostByIdQuery, { id });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}