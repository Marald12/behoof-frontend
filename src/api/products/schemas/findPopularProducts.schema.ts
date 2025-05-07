import { gql } from 'graphql-request'


export const findPopularProductsSchema = gql`
    query findPopularProducts {
        findPopularProducts {
            id
            title
            images
            price
            category {
                title
            }
            characteristics
            colors {
                title
            }
            brand {
                id
                title
            }
        }
    }
`