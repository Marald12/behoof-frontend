import { gql } from 'graphql-request'

export const removeProductFromFavoriteSchema = gql`
	mutation removeProductFromFavorite($id: String!) {
		removeProductFromFavorite(productId: $id) {
			favoriteProducts {
				id
				title
			}
		}
	}
`
