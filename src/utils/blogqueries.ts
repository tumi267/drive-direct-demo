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

  export const blogPostByIdQuery = `
  *[_type == "post" && _id == $id][0] {
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
  }
`
  