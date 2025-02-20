import { gql } from 'graphql-request'

export const findByEmailAndCreateAndSendEmailSchema = gql`
	mutation findByEmailAndCreateAndSendEmail($email: String!) {
		findByEmailAndCreateAndSendEmail(email: $email) {
			id
			token
			type
		}
	}
`
