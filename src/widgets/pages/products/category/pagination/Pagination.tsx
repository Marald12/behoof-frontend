'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './Pagination.module.scss'
import { IProductCategoryInterfaceProps } from '@/widgets/pages/products/category/product-category.interface'
import cn from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { productService } from '@/api/products/product.service'

const Pagination: FC<IProductCategoryInterfaceProps> = ({ setFilterDto }) => {
	const { data } = useQuery({
		queryKey: ['allProducts'],
		queryFn: () => productService.findAllProducts()
	})
	const [totalPages, setTotalPages] = useState(0)
	const countProductForPage = 10

	const pagesCountArray = Array.from(
		{ length: Math.ceil(totalPages / countProductForPage) },
		(_, i) => i
	)
	const [activePage, setActivePage] = useState(0)

	useEffect(() => {
		setFilterDto(prev => ({
			...prev,
			skip: activePage * countProductForPage
		}))
	}, [activePage])

	useEffect(() => {
		if (data?.data) setTotalPages(data.data.findAllProducts.length)
	}, [data])

	return (
		<div className={styles.pagination}>
			<span
				onClick={() =>
					setActivePage(prev => {
						if (prev <= 0) return prev

						return prev - 1
					})
				}
			>
				Назад
			</span>
			<div className={styles.pagination__buttons}>
				{pagesCountArray.map(count => (
					<button
						key={`button-pagination-${count}`}
						onClick={() => setActivePage(count)}
						className={cn({ [styles.active]: count === activePage })}
					>
						{count + 1}
					</button>
				))}
			</div>
			<span
				onClick={() =>
					setActivePage(prev => {
						if (prev >= Math.ceil(totalPages / countProductForPage) - 1) return prev

						return prev + 1
					})
				}
			>
				Вперед
			</span>
		</div>
	)
}

export default Pagination
