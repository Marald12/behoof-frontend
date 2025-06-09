'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './ProductCategoryPage.module.scss'
import Nav from '@/features/nav/Nav'
import { useParams, useSearchParams } from 'next/navigation'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { categoryService } from '@/api/category/category.service'
import { FilterProductsParams, productService } from '@/api/products/product.service'
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
import ProductItem from '@/shared/ui/components/product-item/ProductItem'
import Pagination from '@/widgets/pages/products/category/pagination/Pagination'

const ProductCategoryPage: FC = () => {
	const { id } = useParams()
	const queryClient = useQueryClient()
	const searchParams = useSearchParams()
	const defaultBrandId = searchParams.get('brand')
	const { data, isLoading } = useQuery({
		queryKey: ['category', id],
		queryFn: () => categoryService.findByIdCategory(String(id))
	})
	const [filterDto, setFilterDto] = useState<FilterProductsParams>({
		brands: undefined,
		category: String(id),
		battery: 0,
		maxPrice: 999999,
		memory: undefined,
		minPrice: 0,
		screen: undefined,
		portabilityCount: 0,
		allRating: 0,
		take: 10,
		skip: 0
	})
	const {
		data: productsData,
		isLoading: productIsLoading,
		isFetching
	} = useQuery({
		queryKey: ['filterProducts', id],
		queryFn: () =>
			productService.filterProducts({
				...filterDto
			})
	})
	const [isHidden, setIsHidden] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		queryClient
			.invalidateQueries({
				queryKey: ['filterProducts', id]
			})
			.then()
	}, [filterDto])

	useEffect(() => {
		if (defaultBrandId) {
			setFilterDto(prev => ({
				...prev,
				brands: [defaultBrandId]
			}))
		}
	}, [defaultBrandId])

	const setHiddenHandler = () => {
		if (ref.current) {
			if (isHidden) {
				ref.current.style.transform = 'scale(0)'
				setTimeout(() => setIsHidden(false), 300)
			}
		}
		if (!isHidden) {
			setTimeout(() => {
				if (ref.current) ref.current.style.transform = 'scale(1)'
			}, 1)
			setIsHidden(true)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className="container">
				<Nav links={[{ href: 'products', title: 'Смартфоны' }]} />
				<h4>{data?.data && data.data.findByIdCategory.title}</h4>
				<div className={styles.filter}>
					<div className={styles.filter__title} onClick={setHiddenHandler}>
						<h4>Фильтрация</h4>
						<div>
							{isHidden ? (
								<TiArrowSortedUp size={20} color="#2B3A4E" />
							) : (
								<TiArrowSortedDown size={20} color="#2B3A4E" />
							)}
						</div>
					</div>
					{isHidden && (
						<div className={cn(styles.columns)} ref={ref}>
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
									<Toggle label="Есть" />
									<Toggle label="Есть" />
									<Toggle label="Есть" />
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
							<ProductItem key={item.id} product={item} />
						))}
					{(productIsLoading || isFetching || isLoading) && <Loader />}
					{!productsData?.data?.filterProducts.length && (
						<h4>Список товаров пуст.</h4>
					)}
				</div>
				{productsData?.data && (
					<Pagination setFilterDto={setFilterDto} filterDto={filterDto} />
				)}
			</div>
		</div>
	)
}

export default ProductCategoryPage
