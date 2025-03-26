import { gql } from 'graphql-request'

export const getCategoriesForMenu = gql`
	query getCategoriesForMenu {
		getCategoriesForMenu {
			id
			title
			brands {
				id
				title
				products {
					id
					title
				}
			}
		}
	}
`

export const findByIdCategorySchema = gql`
	query findByIdCategory($id: String!) {
		findByIdCategory(id: $id) {
			id
			title
		}
	}
`
