'use client'
import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'
import { baseUrl } from '@/shared/utils/baseUrl'
import { getCategoriesForMenu as schema } from '@/api/category/category.schemas'
import { toast } from 'react-toastify'

export const categoryService = {
	getForMenu(tag: string, variables?: Object) {
		const query = useQuery({
			queryKey: [tag],
			queryFn: async () => request(baseUrl, schema, variables)
		})

		if (query.isError) toast.error(query.error.message)

		return query
	}
}
