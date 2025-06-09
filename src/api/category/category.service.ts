'use client'
import {
	findAllCategoriesSchema,
	findByIdCategorySchema,
	getCategoriesForMenu
} from '@/api/category/category.schemas'
import { axiosMain } from '@/shared/utils/axios-main'
import {
	FindAllCategoriesQuery,
	FindByIdCategoryQuery,
	GetCategoriesForMenuQuery
} from '@/shared/types/graphql'
import { IApi } from '@/api/api.type'

export const categoryService = {
	async getForMenu(
		brandId: string,
		categoryId: string
	): Promise<IApi<GetCategoriesForMenuQuery>> {
		const request = await axiosMain().post('', {
			query: getCategoriesForMenu,
			variables: { brandId, categoryId }
		})

		return request.data
	},

	async findByIdCategory(id: string): Promise<IApi<FindByIdCategoryQuery>> {
		const request = await axiosMain().post('', {
			query: findByIdCategorySchema,
			variables: { id }
		})

		return request.data
	},

	async findAllCategories(): Promise<IApi<FindAllCategoriesQuery>> {
		const request = await axiosMain().post('', {
			query: findAllCategoriesSchema
		})

		return request.data
	}
}
