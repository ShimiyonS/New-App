import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.HYGRAPH_API)

// const category = `
//     id,
//     name,
//     slug,
// `

// const post = `
//     id,
//     title,
//     slug,
//     coverPhoto { url },
//     content { html }.
//     description,
//     createdAt,
//     updatedAt
// `
export const QUERY_SLUG_CATEGORIES = gql`
    {
        categories(){
            name,
            slug
        }
    }
`