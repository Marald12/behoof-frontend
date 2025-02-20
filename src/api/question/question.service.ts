import { axiosMain } from '@/shared/utils/axios-main'
import { createQuestionSchema } from '@/api/question/schemas/create-question.schema'
import { IApi } from '@/api/api.type'
import { CreateQuestionMutation } from '@/shared/types/graphql'

export const questionService = {
	async create(question: string) {
		const request = await axiosMain().post<IApi<CreateQuestionMutation>>('', {
			query: createQuestionSchema,
			variables: {
				dto: {
					question
				}
			}
		})

		return request.data
	}
}
