import { axiosMain } from '@/shared/utils/axios-main'
import { filterProductsSchema } from '@/api/products/schemas/filterProducts.schema'
import { IApi } from '@/api/api.type'
import { FilterProductsQuery } from '@/shared/types/graphql'

export type FilterProductsParams = {
	brands?: string[]
	minPrice?: number
	maxPrice?: number
	battery?: number
	memory?: number
	screen?: number
	category?: string
	allRating?: number
	portabilityCount?: number
}

export const productService = {
	async filterProducts(params: FilterProductsParams) {
		const request = await axiosMain().post<IApi<FilterProductsQuery>>('', {
			query: filterProductsSchema,
			variables: {
				...params
			}
		})

		return request.data
	}
}
