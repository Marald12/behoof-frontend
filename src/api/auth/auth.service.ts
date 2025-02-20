import { loginSchema } from '@/api/auth/schemas/login.schema'
import { LoginUserMutation, RegisterMutation } from '@/shared/types/graphql'
import { toast } from 'react-toastify'
import { axiosMain } from '@/shared/utils/axios-main'
import { IApi } from '@/api/api.type'
import { registerSchema } from '@/api/auth/schemas/register.schema'

export const authService = {
	async login(email: string, password: string) {
		const request = await axiosMain().post<IApi<LoginUserMutation>>('', {
			query: loginSchema,
			variables: {
				email,
				password
			}
		})

		if (request.data.errors) {
			// @ts-ignore
			request.data.errors.map(error => toast.error(error.message))
		}

		return request.data
	},
	async register(email: string, password: string, name: string) {
		const request = await axiosMain().post<IApi<RegisterMutation>>('', {
			query: registerSchema,
			variables: {
				body: {
					email,
					password,
					name
				}
			}
		})

		if (request.data.errors) {
			// @ts-ignore
			request.data.errors.map(error => toast.error(error.message))
		}

		return request.data
	}
}
