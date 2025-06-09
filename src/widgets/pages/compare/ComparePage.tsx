'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './ComparePage.module.scss'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import Nav from '@/features/nav/Nav'
import cn from 'classnames'
import { clearProducts, ICategory, IProduct } from '@/features/redux/slices/compare.slice'
import CompareItem from '@/widgets/pages/compare/item/CompareItem'
import Link from 'next/link'
import { CiTrash } from 'react-icons/ci'

const ComparePage: FC = () => {
	const dispatch = useAppDispatch()
	const selector = useAppSelector(state => state.compare)
	const categories = selector.products.map(i => i.category)
		.filter((obj, index, self) => index === self.findIndex(o => o.id === obj.id)) as ICategory[]

	const [currentCategory, setCurrentCategory] = useState<string | undefined>(categories[0]?.id)

	let products = selector.products.filter(i => i.category.id === currentCategory) as IProduct[]

	useEffect(() => {
		products = selector.products.filter(i => i.category.id === currentCategory) as IProduct[]
	}, [currentCategory])

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<Nav links={[{ href: 'compare', title: 'Сравнение' }]} />
			<div className={styles.title}>
				<h2>Сравнение товаров</h2>
				<span onClick={() => dispatch(clearProducts())}><CiTrash color="#A1ABB9" size={18} /> Удалить все списки</span>
			</div>
			<div className={styles.categories}>
				{categories.length > 0 && categories.map(category =>
					<button
						key={category.id}
						onClick={() => setCurrentCategory(category.id)}
						className={cn(currentCategory === category.id && styles.active)}
					>{category.title} {selector.products.filter(i => i.category.id === category.id).length}</button>)}
			</div>
			<div className={styles.products}>
				{products.length > 0 && products.map(i => <CompareItem product={i} key={i.id} />)}
				{products.length < 4 && <div className={styles.add__product}>
					<div className={styles.add__product_header}>
						<Link href="/products/925dbf93-713b-4ae7-8f63-5bb627ac99a0">
							<button>Добавить товар</button>
						</Link>
					</div>
					<div className={styles.add__product_content}></div>
				</div>}
			</div>
		</div>
	)
}

export default ComparePage