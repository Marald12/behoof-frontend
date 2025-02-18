import { loginSchema } from '@/api/auth/schemas/login.schema'
import { LoginUserMutation } from '@/shared/types/graphql'
import { toast } from 'react-toastify'
import { axiosMain } from '@/shared/utils/axios-main'
import { IApi } from '@/api/api.type'

export const authService = {
	async login(email: string, password: string) {
		const request = await axiosMain().post<IApi<LoginUserMutation>>('', {
			query: loginSchema,
			variables: {
				email: String(email),
				password: String(password)
			}
		})

		// @ts-ignore
		if (request.data.errors) {
			// @ts-ignore
			request.data.errors.map(error => toast.error(error.message))
		}

		return request.data
	}
}
