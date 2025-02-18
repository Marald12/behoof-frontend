'use client'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { axiosMain } from '@/shared/utils/axios-main'
import { profileSchema } from '@/api/user/schemas/profile.schema'
import { GetProfileQuery } from '@/shared/types/graphql'

export const userService = {
	async fetchProfile(cookiesHeader?: RequestCookie) {
		const request = await axiosMain(cookiesHeader).post<GetProfileQuery>('', {
			query: profileSchema
		})

		return request.data
	}
}
