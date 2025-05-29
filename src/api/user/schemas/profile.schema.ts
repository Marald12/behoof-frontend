import { gql } from 'graphql-request'

export const profileSchema = gql`
    query getProfile {
        getProfile {
            id
            email
            name
            city
            country
            questions {
                id
                question
                createdAt
            }
            favoriteProducts {
                id
                title
                price
                images
                category {
                    id
                    title
                }
                colors {
                    title
                }
                characteristics
                brand {
                    title
                }
            }
        }
    }
`
