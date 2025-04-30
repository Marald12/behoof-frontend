'use client'
import React from 'react'
import styles from './HomePageCategories.module.scss'
import { useQuery } from '@tanstack/react-query'
import { categoryService } from '@/api/category/category.service'

const HomePageCategories = () => {
	const {} = useQuery({
		queryKey: ['category'],
		queryFn: () => categoryService.findByIdCategory('')
	})

	return (
		<div className={styles.categories}>
			<h4>Лучший выбор</h4>
		</div>
	)
}

export default HomePageCategories