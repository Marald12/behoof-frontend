import React, { FC } from 'react'
import styles from './HomePageCategoryItem.module.scss'
import { ICategoryItemProps } from '@/widgets/pages/home/categories/item/category-item.interface'
import Image from 'next/image'
import Link from 'next/link'

const HomePageCategoryItem: FC<ICategoryItemProps> = ({ category }) => {
	return (
		<Link href={`/products/${category.id}`} className={styles.item}>
			<div className={styles.item__image}>
				<Image src={category.banner} alt="Category home page banner" width={90} height={100}
							 style={{ objectFit: 'contain' }} />
			</div>
			<div className={styles.item__title}>
				<span>{category.title}</span>
			</div>
		</Link>
	)
}

export default HomePageCategoryItem