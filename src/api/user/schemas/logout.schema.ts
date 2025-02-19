import { gql } from 'graphql-request'

export const logoutSchema = gql`
	mutation logout {
		logout
	}
`
