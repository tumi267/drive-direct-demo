import { NextResponse } from 'next/server'
import { client } from '@/lib/sanityClient'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const asset = await client.assets.upload('image', buffer, {
      filename: file.name,
    })

    return NextResponse.json({ assetId: asset._id }, { status: 200 })
  } catch (error) {
    console.error('Image upload error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
