import React, { FC } from 'react'
import styles from './ProductCategoryBrands.module.scss'
import { useQuery } from '@tanstack/react-query'
import { brandsService } from '@/api/brands/brands.service'
import { IProductCategoryInterfaceProps } from '@/widgets/pages/products/category/product-category.interface'
import FilterItem from '@/shared/ui/components/filter-item/FilterItem'

const ProductCategoryBrands: FC<IProductCategoryInterfaceProps> = ({
	setFilterDto,
	filterDto
}) => {
	const { data: brandsData, isLoading: brandsIsLoading } = useQuery({
		queryKey: ['brands'],
		queryFn: () => brandsService.findAllBrands()
	})

	const brandClickHandler = (brandId: string) => {
		setFilterDto(prev => {
			const brands = prev.brands ?? []
			const isExists = brands.includes(brandId)

			const updatedBrands = isExists
				? brands.filter(id => id !== brandId)
				: [...brands, brandId]

			return {
				...prev,
				brands: updatedBrands.length > 0 ? updatedBrands : undefined
			}
		})
	}

	return (
		<div className={styles.brand}>
			<h4>Бренды</h4>

			<div className={styles.brand__items}>
				{brandsData?.data &&
					brandsData.data.findAllBrands.map(item => (
						<FilterItem
							isActive={
								filterDto.brands?.find(id => id === item.id) ? true : false
							}
							key={item.id}
							onClick={() => brandClickHandler(item.id)}
						>
							{item.title}
						</FilterItem>
					))}
			</div>
		</div>
	)
}

export default ProductCategoryBrands
