'use client'
import React from 'react'
import styles from './CategoriesPage.module.scss'
import cn from 'classnames'
import Nav from '@/features/nav/Nav'
import { useQuery } from '@tanstack/react-query'
import { categoryService } from '@/api/category/category.service'
import Loader from '@/shared/ui/components/loader/Loader'
import Link from 'next/link'

const CategoriesPage = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['categoriesPage'],
		queryFn: () => categoryService.findAllCategories()
	})

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<Nav links={[{ href: 'categories', title: 'Категории' }]} />
			<h3>Категории</h3>
			<div>
				{isLoading && <Loader />}
				{data?.data && data.data.findAllCategories.map(category => <section key={category.id}>
					<h5>{category.title}</h5>
					<div>
						<Link href={`/products/${category.id}`}>Все {category.title.toLowerCase()}</Link>
						{category.brands?.map(brand => (
							<Link href={`/products/${category.id}?brand=${brand.id}`} key={brand.id}>
								{brand.title}
							</Link>
						))}
					</div>
				</section>)}
			</div>
		</div>
	)
}

export default CategoriesPage