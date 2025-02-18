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
