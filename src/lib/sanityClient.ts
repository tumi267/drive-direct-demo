import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'czr3lxuy',  // replace with your Sanity project ID
  dataset: 'production',         // or your dataset name
  apiVersion: '2023-07-01',      // use current date or fixed version
  useCdn: true,
  token:process.env.SANITY                  // `false` if you want fresh data always
})
