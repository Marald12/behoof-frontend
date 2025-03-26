import { findAllBrandsSchema } from '@/api/brands/schemas/findAllBrands.schema'
import { axiosMain } from '@/shared/utils/axios-main'
import { IApi } from '@/api/api.type'
import { FindAllBrandsQuery } from '@/shared/types/graphql'

export const brandsService = {
	async findAllBrands() {
		const request = await axiosMain().post<IApi<FindAllBrandsQuery>>('', {
			query: findAllBrandsSchema
		})

		return request.data
	}
}
