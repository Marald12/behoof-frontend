'use client'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { axiosMain } from '@/shared/utils/axios-main'
import { profileSchema } from '@/api/user/schemas/profile.schema'
import {
	AddProductToFavoriteMutation,
	ChangePasswordMutation,
	CreateTokenAndSendEmailMutation,
	FindByEmailAndCreateAndSendEmailMutation,
	GetProfileQuery,
	LogoutMutation,
	RemoveProductFromFavoriteMutation,
	UpdateUserMutation
} from '@/shared/types/graphql'
import { IApi } from '@/api/api.type'
import { updateUserSchema } from '@/api/user/schemas/update-user.schema'
import { toast } from 'react-toastify'
import { logoutSchema } from '@/api/user/schemas/logout.schema'
import { createTokenAndSendEmailSchema } from '@/api/user/schemas/reset-password-auth.schema'
import { findByEmailAndCreateAndSendEmailSchema } from '@/api/user/schemas/reset-password-no-auth.schema'
import { changePasswordQuery } from '@/api/user/schemas/change-password.schema'
import { checkTokenSchema } from '@/api/user/schemas/check-token.schema'
import { addProductToFavoriteSchema } from '@/api/user/schemas/add-product-to-favorite.schema'
import { removeProductFromFavoriteSchema } from '@/api/user/schemas/remove-product-to-favorite.schema'

export const userService = {
	async fetchProfile(cookiesHeader?: RequestCookie): Promise<IApi<GetProfileQuery>> {
		const request = await axiosMain(cookiesHeader).post('', {
			query: profileSchema
		})

		return request.data
	},

	async updateUser(data: { country?: string; city?: string; name?: string }): Promise<IApi<UpdateUserMutation>> {
		const request = await axiosMain().post('', {
			query: updateUserSchema,
			variables: { body: data }
		})

		if (request.data.errors) toast.error(request.data.errors[0].message)
		return request.data
	},

	async logout(): Promise<IApi<LogoutMutation>> {
		const request = await axiosMain().post('', {
			query: logoutSchema
		})

		if (request.data.errors) toast.error(request.data.errors[0].message)
		return request.data
	},

	async createTokenAndSendEmail(): Promise<IApi<CreateTokenAndSendEmailMutation>> {
		const request = await axiosMain().post('', {
			query: createTokenAndSendEmailSchema
		})

		if (request.data.errors) toast.error(request.data.errors[0].message)
		return request.data
	},

	async findByEmailAndCreateAndSendEmail(email: string): Promise<IApi<FindByEmailAndCreateAndSendEmailMutation>> {
		const request = await axiosMain().post('', {
			query: findByEmailAndCreateAndSendEmailSchema,
			variables: { email }
		})

		if (request.data.errors) toast.error(request.data.errors[0].message)
		return request.data
	},

	async changePassword(token: string, password: string): Promise<IApi<ChangePasswordMutation>> {
		const request = await axiosMain().post('', {
			query: changePasswordQuery,
			variables: { token, password }
		})

		if (request.data.errors) toast.error(request.data.errors[0].message)
		return request.data
	},

	async checkToken(token: string): Promise<any> {
		try {
			const request = await axiosMain().post('', {
				query: checkTokenSchema,
				variables: { token }
			})

			return request.data
		} catch (e) {
			// @ts-ignore
			console.log(e.response.data)
		}
	},

	async addProductToFavorite(id: string): Promise<IApi<AddProductToFavoriteMutation> | undefined> {
		try {
			const request = await axiosMain().post('', {
				query: addProductToFavoriteSchema,
				variables: { id }
			})

			return request.data
		} catch (e) {
			// @ts-ignore
			console.log(e.response.data)
		}
	},

	async removeProductFromFavorite(id: string): Promise<IApi<RemoveProductFromFavoriteMutation> | undefined> {
		try {
			const request = await axiosMain().post('', {
				query: removeProductFromFavoriteSchema,
				variables: { id }
			})

			return request.data
		} catch (e) {
			// @ts-ignore
			console.log(e.response.data)
		}
	}
}
