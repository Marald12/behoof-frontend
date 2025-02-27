'use client'
import React, { FC } from 'react'
import styles from './Catalog.module.scss'
import { ICatalogProps } from '@/features/catalog/catalog.interface'
import cn from 'classnames'
import { categoryService } from '@/api/category/category.service'
import { useQuery } from '@tanstack/react-query'

const Catalog: FC<ICatalogProps> = ({ isShow, ref }) => {
	const { data } = useQuery({
		queryKey: ['categoriesMenu'],
		queryFn: () => categoryService.getForMenu()
	})

	return (
		<div className={cn(styles.catalog, isShow && styles.show)}>
			<div className={styles.catalog__window} ref={ref}>
				<div className={cn('container', styles.catalog__window_container)}>
					<div className={styles.catalog__window__container_column}>123</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
