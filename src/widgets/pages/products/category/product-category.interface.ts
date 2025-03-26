import { Dispatch, SetStateAction } from 'react'
import { FilterProductsParams } from '@/api/products/product.service'

export interface IProductCategoryInterfaceProps {
	setFilterDto: Dispatch<SetStateAction<FilterProductsParams>>
	filterDto: FilterProductsParams
}
