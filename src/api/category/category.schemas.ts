import { gql } from 'graphql-request'

export const getCategoriesForMenu = gql`
	query {
		getCategoriesForMenu {
			title
			brands {
				title
				products {
					title
				}
			}
		}
	}
`
