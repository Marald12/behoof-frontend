import { gql } from 'graphql-request'

export const profileSchema = gql`
	query getProfile {
		getProfile {
			id
			email
			name
			city
			country
			questions {
				id
				question
				createdAt
			}
		}
	}
`
