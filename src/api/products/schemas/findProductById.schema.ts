import { gql } from 'graphql-request'

export const findProductByIdSchema = gql`
	query findProductById($id: String!) {
		findProductById(id: $id) {
			id
			title
			description
			price
			category {
				id
				title
			}
			brand {
				id
				title
			}
			colors {
				id
				color
				title
			}
			images
			characteristics
			rating
			reviews {
				id
				message
				starsCount
				user {
					name
				}
				createdAt
			}
		}
	}
`
