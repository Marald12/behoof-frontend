import React, { FC } from 'react'
import { IProductNoApiProps } from '@/shared/types/product.type'
import styles from './ProductReviews.module.scss'
import ProductReviewItem from '@/widgets/pages/product/reviews/item/ProductReviewItem'

const ProductReviews: FC<IProductNoApiProps> = ({ product }) => {
	return (
		<div className={styles.reviews}>
			<h4>Отзывы</h4>
			<div>
				{product?.reviews ? product.reviews.map(review => <ProductReviewItem key={review.id} review={review} />) :
					<span>Ещё нету отзывов</span>}
			</div>
		</div>
	)
}

export default ProductReviews