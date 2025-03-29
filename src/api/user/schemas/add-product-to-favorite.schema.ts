import { gql } from 'graphql-request'

export const addProductToFavoriteSchema = gql`
	mutation addProductToFavorite($id: String!) {
		addProductToFavorite(productId: $id) {
			favoriteProducts {
				id
				title
			}
		}
	}
`
