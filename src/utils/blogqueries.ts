export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    body
  }`
  