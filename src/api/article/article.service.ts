import { IApi } from '@/api/api.type'
import { FindAllArticlesQuery, FindArticleByIdQuery } from '@/shared/types/graphql'
import { findAllArticlesSchema } from '@/api/article/schemas/findAllArticles.schema'
import { axiosMain } from '@/shared/utils/axios-main'
import { findByIdArticleSchema } from '@/api/article/schemas/findArticleById.schema'

export const articleService = {
	async findAll(dto?: {
		take?: number,
		skip?: number,
		search?: string,
		categoryId?: string,
		tag?: string
	}): Promise<IApi<FindAllArticlesQuery>> {
		const request = await axiosMain().post('', {
			query: findAllArticlesSchema,
			variables: dto
		})

		return request.data
	},
	async findById(id: string): Promise<IApi<FindArticleByIdQuery>> {
		const request = await axiosMain().post('', {
			query: findByIdArticleSchema,
			variables: { id }
		})

		return request.data
	}
}