'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './ProductCategoryPage.module.scss'
import Nav from '@/features/nav/Nav'
import { useParams } from 'next/navigation'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { categoryService } from '@/api/category/category.service'
import {
	FilterProductsParams,
	productService
} from '@/api/products/product.service'
import Loader from '@/shared/ui/components/loader/Loader'
import 'react-range-slider-input/dist/style.css'
import Toggle from '@/shared/ui/toggle/Toggle'
import ProductCategoryBrands from '@/widgets/pages/products/category/brands/ProductCategoryBrands'
import ProductCategoryPrices from '@/widgets/pages/products/category/prices/ProductCategoryPrices'
import ProductCategoryBattery from '@/widgets/pages/products/category/battery/ProductCategoryBattery'
import ProductCategoryDisplay from '@/widgets/pages/products/category/display/ProductCategoryDisplay'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import cn from 'classnames'
import ProductCategoryPortability from '@/widgets/pages/products/category/portability/ProductCategoryPortability'
import ProductCategoryAnswer from '@/widgets/pages/products/category/answer/ProductCategoryAnswer'

const ProductCategoryPage: FC = () => {
	const { id } = useParams()
	const queryClient = useQueryClient()
	const { data, isLoading } = useQuery({
		queryKey: ['category'],
		queryFn: () => categoryService.findByIdCategory(String(id))
	})
	const [filterDto, setFilterDto] = useState<FilterProductsParams>({
		brands: undefined,
		category: String(id),
		battery: 0,
		maxPrice: 100000,
		memory: undefined,
		minPrice: 0,
		screen: undefined,
		portabilityCount: 0,
		allRating: 0
	})
	const {
		data: productsData,
		isLoading: productIsLoading,
		isFetching
	} = useQuery({
		queryKey: ['filterProducts'],
		queryFn: () =>
			productService.filterProducts({
				...filterDto
			})
	})
	const [isHidden, setIsHidden] = useState(true)

	useEffect(() => {
		queryClient
			.invalidateQueries({
				queryKey: ['filterProducts']
			})
			.then()
	}, [filterDto])

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<Nav links={[{ href: '/products/', title: 'Смартфоны' }]} />
				<h4>{data?.data && data.data.findByIdCategory.title}</h4>
				<div className={styles.filter}>
					<div className={styles.filter__title}>
						<h4>Фильтрация</h4>
						<div>
							{isHidden ? (
								<TiArrowSortedUp
									size={20}
									color='#2B3A4E'
									onClick={() => setIsHidden(prev => !prev)}
								/>
							) : (
								<TiArrowSortedDown
									size={20}
									color='#2B3A4E'
									onClick={() => setIsHidden(prev => !prev)}
								/>
							)}
						</div>
					</div>
					{isHidden && (
						<div className={cn(styles.columns, isHidden && styles.active)}>
							<div className={styles.column}>
								<ProductCategoryBrands
									filterDto={filterDto}
									setFilterDto={setFilterDto}
								/>
								<ProductCategoryPrices
									filterDto={filterDto}
									setFilterDto={setFilterDto}
								/>
								<div className={styles.additionally}>
									<h4>Дополнительно</h4>
									<Toggle label='Есть' />
									<Toggle label='Есть' />
									<Toggle label='Есть' />
								</div>
							</div>
							<div className={styles.column}>
								<ProductCategoryBattery
									setFilterDto={setFilterDto}
									filterDto={filterDto}
								/>
								<ProductCategoryPortability
									setFilterDto={setFilterDto}
									filterDto={filterDto}
								/>
							</div>
							<div className={styles.column}>
								<ProductCategoryDisplay
									setFilterDto={setFilterDto}
									filterDto={filterDto}
								/>
								<ProductCategoryAnswer
									setFilterDto={setFilterDto}
									filterDto={filterDto}
								/>
							</div>
						</div>
					)}
				</div>
				<div className={styles.products}>
					{productsData?.data &&
						!isFetching &&
						productsData.data.filterProducts.map(item => (
							<div key={item.id}>{item.title}</div>
						))}
					{(productIsLoading || isFetching || isLoading) && <Loader />}
					{!productsData?.data?.filterProducts.length && (
						<h4>Список товаров пуст.</h4>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductCategoryPage
