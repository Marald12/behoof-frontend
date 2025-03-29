import { gql } from 'graphql-request'

export const filterProductsSchema = gql`
	query filterProducts(
		$brands: [String!]
		$minPrice: Float
		$maxPrice: Float
		$battery: Float
		$memory: Float
		$screen: Float
		$category: String
		$allRating: Float
		$portabilityCount: Float
		$skip: Float
		$take: Float
	) {
		filterProducts(
			brands: $brands
			minPrice: $minPrice
			maxPrice: $maxPrice
			battery: $battery
			memory: $memory
			screen: $screen
			category: $category
			allRating: $allRating
			portabilityCount: $portabilityCount
			skip: $skip
			take: $take
		) {
			id
			title
			description
			images
			price
			rating
			characteristics
			reviews {
				id
			}
			brand {
				title
			}
		}
	}
`
