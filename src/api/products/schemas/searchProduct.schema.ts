import { gql } from 'graphql-request'

export const searchProductSchema = gql`
    query SearchProducts($value: String!) {
        searchProducts(search: $value) {
            id
            title
            images
            price
            brand {
                title
            }
            category {
                title
            }
        }
    }
`