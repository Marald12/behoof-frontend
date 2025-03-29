import React, { FC } from 'react'
import styles from './ProductItemButtonCompare.module.scss'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'

const ProductItemButtonCompare: FC = () => {
	return (
		<button className={styles.button}>
			<TbBrandGoogleAnalytics size={24} />
		</button>
	)
}

export default ProductItemButtonCompare
