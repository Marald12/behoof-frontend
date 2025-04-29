import { IApi } from '@/api/api.type'
import { FindProductByIdQuery } from '@/shared/types/graphql'

export type IProductById = {
	__typename?: 'Query'
	findProductById: {
		__typename?: 'Product'
		id: string
		title: string
		description: string
		price: number
		images?: Array<string> | null
		characteristics: any
		rating: number
		category: { __typename?: 'Category'; id: string; title: string }
		brand: { __typename?: 'Brand'; id: string; title: string }
		colors?: Array<{
			__typename?: 'Color'
			id: string
			color: string
			title: string
		}> | null
		reviews?: Array<{
			__typename?: 'Review'
			id: string
			message: string
			starsCount: number
			createdAt: any
			user: { __typename?: 'User'; name: string }
		}> | null
	}
}

export interface IProductProps {
	product: IApi<FindProductByIdQuery> | undefined
}

export interface IProductNoApiProps {
	product:
		| {
				__typename?: 'Product'
				id: string
				title: string
				description: string
				price: number
				images?: Array<string> | null
				characteristics: any
				rating: number
				category: { __typename?: 'Category'; id: string; title: string }
				brand: { __typename?: 'Brand'; id: string; title: string }
				colors?: Array<{
					__typename?: 'Color'
					id: string
					color: string
					title: string
				}> | null
				reviews?: Array<{
					__typename?: 'Review'
					id: string
					message: string
					starsCount: number
					createdAt: any
					user: { __typename?: 'User'; name: string }
				}> | null
		  }
		| undefined
}
