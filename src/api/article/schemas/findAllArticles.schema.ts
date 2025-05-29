import { gql } from 'graphql-request'


export const findAllArticlesSchema = gql`
    query findAllArticles($categoryId: String, $skip: Float, $take: Float, $search: String, $tag: String) {
        findAllArticles(categoryId: $categoryId, skip: $skip, take: $take, search: $search, tag: $tag) {
            id
            title
            banner
            tags
            createdAt
        }
    }
`