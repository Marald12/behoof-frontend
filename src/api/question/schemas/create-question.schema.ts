import { gql } from 'graphql-request'

export const createQuestionSchema = gql`
	mutation createQuestion($dto: QuestionDto!) {
		createQuestion(dto: $dto) {
			id
			question
		}
	}
`
