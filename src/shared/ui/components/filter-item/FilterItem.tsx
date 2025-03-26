import React, { FC } from 'react'
import cn from 'classnames'
import styles from './FilterItem.module.scss'
import { IFilterItemProps } from '@/shared/ui/components/filter-item/filter-item.interface'

const FilterItem: FC<IFilterItemProps> = ({
	isActive = false,
	className,
	children,
	...rest
}) => {
	return (
		<div
			className={cn(styles.item, isActive && styles.active, className)}
			{...rest}
		>
			{children}
		</div>
	)
}

export default FilterItem
