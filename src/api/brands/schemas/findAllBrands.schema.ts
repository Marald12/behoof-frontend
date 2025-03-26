import { gql } from 'graphql-request'

export const findAllBrandsSchema = gql`
	query findAllBrands {
		findAllBrands {
			id
			title
		}
	}
`
