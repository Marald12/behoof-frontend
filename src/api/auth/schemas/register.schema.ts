import { gql } from 'graphql-request'

export const registerSchema = gql`
	mutation register($body: CreateUserDto!) {
		register(body: $body) {
			id
			email
			name
		}
	}
`
