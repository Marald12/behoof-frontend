import { gql } from 'graphql-request'

export const loginSchema = gql`
	mutation loginUser($email: String!, $password: String!) {
		login(body: { email: $email, password: $password }) {
			id
			email
			name
		}
	}
`
