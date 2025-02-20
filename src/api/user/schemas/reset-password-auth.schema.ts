import { gql } from 'graphql-request'

export const createTokenAndSendEmailSchema = gql`
	mutation createTokenAndSendEmail {
		createTokenAndSendEmail {
			id
			token
			type
		}
	}
`
