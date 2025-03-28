'use client'
import React, { FC, useState } from 'react'
import styles from './Catalog.module.scss'
import { ICatalogProps } from '@/features/catalog/catalog.interface'
import cn from 'classnames'
import { categoryService } from '@/api/category/category.service'
import { useQuery } from '@tanstack/react-query'
import Loader from '@/shared/ui/components/loader/Loader'
import { FaCaretRight } from 'react-icons/fa'
import Link from 'next/link'

const Catalog: FC<ICatalogProps> = ({ isShow, ref, setIsShow }) => {
	const [isMouseEvent, setIsMouseEvent] = useState('')
	const [isMouseEventTwo, setIsMouseEventTwo] = useState('')
	const [_, setIsMouseEventThree] = useState('')

	const { data, isLoading } = useQuery({
		queryKey: ['categoriesMenu'],
		queryFn: () => categoryService.getForMenu()
	})

	const selectedCategory = data?.data?.getCategoriesForMenu?.find(
		item => item.id === isMouseEvent
	)

	const selectedProducts = selectedCategory?.brands?.find(
		item => item.id === isMouseEventTwo
	)

	return (
		<div className={cn(styles.catalog, isShow && styles.show)}>
			<div className={styles.catalog__window} ref={ref}>
				<div className={cn(styles.catalog__window_container, 'container')}>
					<div className={styles.catalog__window_container_column}>
						<h4>Каталог товаров</h4>
						{isLoading && <Loader />}
						{data?.data && (
							<div className={styles.items}>
								{data.data.getCategoriesForMenu.map(item => (
									<Link
										key={item.id}
										className={styles.items__item}
										onMouseEnter={() => {
											setIsMouseEvent(item.id)
										}}
										href={`/products/${item.id}`}
										onClick={() => setIsShow(false)}
									>
										{item.title}
										<FaCaretRight size={18} color='#2B3A4E' />
									</Link>
								))}
							</div>
						)}
					</div>
					<div className={styles.catalog__window_container_column}>
						<h4>{selectedCategory?.title}</h4>
						<div className={styles.catalog__window_container_column}>
							{selectedCategory &&
								selectedCategory.brands?.map(item => (
									<Link
										key={item.id}
										className={styles.items__item}
										onMouseEnter={() => {
											setIsMouseEventTwo(item.id)
										}}
										href={`/products/${isMouseEvent}?brand=${item.id}`}
										onClick={() => setIsShow(false)}
									>
										{item.title}
										<FaCaretRight size={18} color='#2B3A4E' />
									</Link>
								))}
						</div>
					</div>
					<div className={styles.catalog__window_container_column}>
						<h4>{selectedProducts?.title}</h4>
						<div className={styles.catalog__window_container_column}>
							{selectedProducts &&
								selectedProducts.products?.map(item => (
									<Link
										key={item.id}
										className={styles.items__item}
										onMouseEnter={() => {
											setIsMouseEventThree(item.id)
										}}
										href={`/product/${item.id}`}
										onClick={() => setIsShow(false)}
									>
										{item.title}
										<FaCaretRight size={18} color='#2B3A4E' />
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
