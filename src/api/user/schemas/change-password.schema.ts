import { gql } from 'graphql-request'

export const changePasswordQuery = gql`
	mutation changePassword($token: String!, $password: String!) {
		changePassword(token: $token, password: $password) {
			id
			email
			password
		}
	}
`
