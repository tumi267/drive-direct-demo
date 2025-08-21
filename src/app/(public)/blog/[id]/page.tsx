import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanityClient'
import { blogPostByIdQuery } from '@/utils/blogqueries'

interface PageProps {
  params: {
    id: string
  }
}

export default async function BlogPage({ params }: PageProps) {
  const post = await client.fetch(blogPostByIdQuery, { id: params.id })

  if (!post) {
    return <div>Post not found</div>
  }

  const components = {
    types: {
      image: ({ value }: any) => (
        <img src={value.asset.url} alt={value.alt || ''} />
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <a href={value.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  }

  return (
    <article className="prose mx-auto w-[60%] ml-auto mr-auto">
      <h1 className='text-[48px] mb-[1.5em] mt-[1.5em]'><strong>{post.title}</strong></h1>
      <div className='text-[24px] leading-relaxed [&>p]:mb-[1em]' dangerouslySetInnerHTML={{ __html: post.body }}/>
      <p>{new Date(post.publishedAt).toDateString()}</p>
    </article>
  )
}
