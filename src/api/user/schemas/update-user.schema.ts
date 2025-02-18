import { gql } from 'graphql-request'

export const updateUserSchema = gql`
	mutation updateUser($body: UpdateUserDto!) {
		updateUser(body: $body) {
			name
			country
			city
		}
	}
`
