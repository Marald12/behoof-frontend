import React, { FC } from 'react'
import styles from './ProductItem.module.scss'
import { IProductItem } from '@/shared/ui/components/product-item/product-item.interface'
import Image from 'next/image'
import { GoStarFill } from 'react-icons/go'

const ProductItem: FC<{ product: IProductItem }> = ({ product }) => {
	const starArray = Array.from({ length: 5 }, (_, i) => i + 1)

	return (
		<div className={styles.item}>
			<Image
				src={product.images![0]}
				alt={product.images![0]}
				width={240}
				height={240}
			/>
			<div className={styles.item__content}>
				<div className={styles.item__content_header}>
					<div>{product.rating}.0 Оценка экспертов</div>
					{product.reviews && (
						<div>
							{product.characteristics.answerCount}.0
							{product.reviews &&
								starArray.map(i => (
									<GoStarFill
										key={`star-item-${i}`}
										size={21}
										color={
											i <= product.characteristics.answerCount
												? '#FF4D4D'
												: '#C3CAD4'
										}
									/>
								))}
							<span> {product.reviews?.length} Отзывов</span>
						</div>
					)}
				</div>
				<h2>{product.title}</h2>
				<div>
					<p>{product.description}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
