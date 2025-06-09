import { IApi } from '@/api/api.type'
import { axiosMain } from '@/shared/utils/axios-main'
import { createCommentSchema } from '@/api/comments/schemas/createComment.schema'
import { CreateCommentMutation } from '@/shared/types/graphql'


export const commentsService = {
	async createComment(articleId: string, comment: string): Promise<IApi<CreateCommentMutation>> {
		const response = await axiosMain().post('', {
			query: createCommentSchema,
			variables: {
				id: articleId,
				comment
			}
		})

		return response.data
	}
}