import { IApi } from '@/api/api.type'
import { FindAllArticlesQuery } from '@/shared/types/graphql'
import { findAllArticlesSchema } from '@/api/article/schemas/findAllArticles.schema'
import { axiosMain } from '@/shared/utils/axios-main'

export const articleService = {
	async findAll(dto?: {
		take?: number,
		skip?: number,
		search?: string,
		categoryId?: string,
		tag?: string[]
	}): Promise<IApi<FindAllArticlesQuery>> {
		const request = await axiosMain().post('', {
			query: findAllArticlesSchema,
			variables: dto
		})

		return request.data
	}
}