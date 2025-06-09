import { gql } from 'graphql-request'

export const getCategoriesForMenu = gql`
	query getCategoriesForMenu($brandId: String!, $categoryId: String!) {
		getCategoriesForMenu(brandId: $brandId, categoryId: $categoryId) {
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

export const findAllCategoriesSchema = gql`
	query findAllCategories {
		findAllCategories {
			banner
			id
			title
			brands {
				id
				title
			}
		}
	}
`
