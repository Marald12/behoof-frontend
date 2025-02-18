'use client'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { axiosMain } from '@/shared/utils/axios-main'
import { profileSchema } from '@/api/user/schemas/profile.schema'
import { GetProfileQuery, UpdateUserMutation } from '@/shared/types/graphql'
import { IApi } from '@/api/api.type'
import { updateUserSchema } from '@/api/user/schemas/update-user.schema'
import { toast } from 'react-toastify'

export const userService = {
	async fetchProfile(cookiesHeader?: RequestCookie) {
		const request = await axiosMain(cookiesHeader).post<IApi<GetProfileQuery>>(
			'',
			{
				query: profileSchema
			}
		)

		return request.data
	},
	async updateUser(data: { country?: string; city?: string; name?: string }) {
		const request = await axiosMain().post<IApi<UpdateUserMutation>>('', {
			query: updateUserSchema,
			variables: { body: data }
		})

		if (request.data.errors) toast.error(request.data.errors[0].message)

		return request.data
	}
}
