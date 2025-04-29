import { axiosMain } from '@/shared/utils/axios-main'
import { filterProductsSchema } from '@/api/products/schemas/filterProducts.schema'
import { IApi } from '@/api/api.type'
import {
	FilterProductsQuery,
	FindAllProductsQuery,
	FindProductByIdQuery,
	SearchProductsQuery
} from '@/shared/types/graphql'
import { findAllProductsSchema } from '@/api/products/schemas/findAllProducts.schema'
import { findProductByIdSchema } from '@/api/products/schemas/findProductById.schema'
import { searchProductSchema } from '@/api/products/schemas/searchProduct.schema'

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
	skip?: number
	take?: number
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
	},
	async findAllProducts() {
		const request = await axiosMain().post<IApi<FindAllProductsQuery>>('', {
			query: findAllProductsSchema
		})

		return request.data
	},
	async findProductById(id: string): IApi<FindProductByIdQuery> {
		const request = await axiosMain().post<IApi<FindProductByIdQuery>>('', {
			query: findProductByIdSchema,
			variables: {
				id
			}
		})

		return request.data
	},
	async searchProducts(value: string): IApi<SearchProductsQuery> {
		const request = await axiosMain().post<IApi<SearchProductsQuery>>('', {
			query: searchProductSchema,
			variables: {
				value
			}
		})

		return request.data
	}
}
