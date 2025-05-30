import { gql } from 'graphql-request'


export const findByIdArticleSchema = gql`
    query findArticleById($id: String!) {
        findArticleById(id: $id) {
            id
            title
            viewsCount
            tags
            createdAt
            banner
            category {
                id
                title
            }
            comments {
                id
                comment
                user {
                    id
                    name
                }
            }
            content {
                id
                description
                images
                title
                types
            }
            user {
                id
                name
            }
        }
    }
`