import { gql } from 'graphql-request'

export const findAllProductsSchema = gql`
	query findAllProducts {
		findAllProducts {
			id
			title
		}
	}
`
