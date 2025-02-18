import axios from 'axios'
import { baseUrl } from '@/shared/utils/baseUrl'
import { loginSchema } from '@/api/auth/schemas/login.schema'
import { LoginUserMutation } from '@/shared/types/graphql'
import { toast } from 'react-toastify'

export const authService = {
	async login(email: string, password: string) {
		const request = await axios.post<LoginUserMutation>(
			baseUrl,
			{
				query: loginSchema,
				variables: {
					email: String(email),
					password: String(password)
				}
			},
			{
				headers: {
					'Content-Type': 'application/json' // Important for GraphQL APIs
				},
				withCredentials: true
			}
		)

		// @ts-ignore
		if (request.data.errors) {
			// @ts-ignore
			request.data.errors.map(error => toast.error(error.message))
		}

		return request.data
	}
}
