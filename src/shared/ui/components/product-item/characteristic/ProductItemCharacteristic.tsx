import React, { FC } from 'react'
import styles from './ProductItemCharacteristic.module.scss'
import { IProductItemCharacteristicInterfaceProps } from '@/shared/ui/components/product-item/characteristic/product-item-characteristic.interface'
import cn from 'classnames'

const ProductItemCharacteristic: FC<
	IProductItemCharacteristicInterfaceProps
> = ({ label, count }) => {
	const arrayCount = Array.from({ length: 5 }, (_, i) => i + 1)

	return (
		<div className={styles.characteristic}>
			<span>{label}</span>
			<div className={styles.characteristic__items}>
				{arrayCount.map(i => (
					<div
						key={i}
						className={cn(
							styles.characteristic__items_item,
							i <= count && styles.active
						)}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductItemCharacteristic
