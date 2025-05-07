'use client'
import React from 'react'
import styles from './HomePagePopularProducts.module.scss'
import cn from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { productService } from '@/api/products/product.service'
import Loader from '@/shared/ui/components/loader/Loader'
import PopularProductItem from '@/widgets/pages/home/popular-products/item/PopularProductItem'

const HomePagePopularProducts = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['popularProducts'],
		queryFn: () => productService.findPopular()
	})

	return (
		<section className={cn(styles.section, 'container')}>
			<h4>Новинки</h4>
			<div>
				{isLoading && <Loader />}
				{data?.data && data.data.findPopularProducts.map(product => <PopularProductItem product={product}
																																												key={product.id} />)}
			</div>
		</section>
	)
}

export default HomePagePopularProducts