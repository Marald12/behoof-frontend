'use client'

import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'
import { baseUrl } from '@/shared/utils/baseUrl'
import { getCategoriesForMenu } from '@/api/category/category.schemas'

export const categoryService = {
	getForMenu(tag: string, variables?: Object) {
		return useQuery({
			queryKey: [tag],
			queryFn: async () => request(baseUrl, getCategoriesForMenu, variables)
		})
	}
}
