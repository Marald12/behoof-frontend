'use client'
import React, { FC } from 'react'
import styles from './HomePageCategories.module.scss'
import { useQuery } from '@tanstack/react-query'
import { categoryService } from '@/api/category/category.service'
import Loader from '@/shared/ui/components/loader/Loader'
import HomePageCategoryItem from '@/widgets/pages/home/categories/item/HomePageCategoryItem'

const HomePageCategories: FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['categoryHome'],
		queryFn: () => categoryService.findAllCategories()
	})

	return (
		<div className={styles.categories}>
			<h4>Категории</h4>
			<div className={styles.categories__container}>
				{data?.data && data.data.findAllCategories.map(category => <HomePageCategoryItem key={category.id}
																																												 category={category} />)}
				{isLoading && <Loader />}
			</div>
		</div>
	)
}

export default HomePageCategories