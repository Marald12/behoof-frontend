import { gql } from 'graphql-request'

export const checkTokenSchema = gql`
	mutation checkToken($token: String!) {
		checkToken(token: $token) {
			id
			token
			email
		}
	}
`
