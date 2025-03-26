'use client'
import {
	findByIdCategorySchema,
	getCategoriesForMenu
} from '@/api/category/category.schemas'
import { axiosMain } from '@/shared/utils/axios-main'
import {
	FindByIdCategoryQuery,
	GetCategoriesForMenuQuery
} from '@/shared/types/graphql'
import { IApi } from '@/api/api.type'

export const categoryService = {
	async getForMenu() {
		const request = await axiosMain().post<IApi<GetCategoriesForMenuQuery>>(
			'',
			{
				query: getCategoriesForMenu
			}
		)

		return request.data
	},
	async findByIdCategory(id: string) {
		const request = await axiosMain().post<IApi<FindByIdCategoryQuery>>('', {
			query: findByIdCategorySchema,
			variables: { id }
		})

		return request.data
	}
}
