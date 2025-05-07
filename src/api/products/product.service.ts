import { axiosMain } from '@/shared/utils/axios-main'
import { filterProductsSchema } from '@/api/products/schemas/filterProducts.schema'
import { IApi } from '@/api/api.type'
import {
	FilterProductsQuery,
	FindAllProductsQuery,
	FindPopularProductsQuery,
	FindProductByIdQuery,
	SearchProductsQuery
} from '@/shared/types/graphql'
import { findAllProductsSchema } from '@/api/products/schemas/findAllProducts.schema'
import { findProductByIdSchema } from '@/api/products/schemas/findProductById.schema'
import { searchProductSchema } from '@/api/products/schemas/searchProduct.schema'
import { findPopularProductsSchema } from '@/api/products/schemas/findPopularProducts.schema'

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
	async filterProducts(params: FilterProductsParams): Promise<IApi<FilterProductsQuery>> {
		const request = await axiosMain().post('', {
			query: filterProductsSchema,
			variables: { ...params }
		})

		return request.data
	},

	async findAllProducts(): Promise<IApi<FindAllProductsQuery>> {
		const request = await axiosMain().post('', {
			query: findAllProductsSchema
		})

		return request.data
	},

	async findProductById(id: string): Promise<IApi<FindProductByIdQuery>> {
		const request = await axiosMain().post('', {
			query: findProductByIdSchema,
			variables: { id }
		})

		return request.data
	},

	async searchProducts(value: string): Promise<IApi<SearchProductsQuery>> {
		const request = await axiosMain().post('', {
			query: searchProductSchema,
			variables: { value }
		})

		return request.data
	},

	async findPopular(): Promise<IApi<FindPopularProductsQuery>> {
		const request = await axiosMain().post('', {
			query: findPopularProductsSchema
		})

		return request.data
	}
}
