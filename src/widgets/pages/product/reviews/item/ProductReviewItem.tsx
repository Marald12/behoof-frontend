import React, { FC } from 'react'
import styles from './ProductReviewItem.module.scss'
import { IReviewItemProps } from '@/widgets/pages/product/reviews/item/review-item.interface'
import userAvatar from '@/assets/images/user-avatar.png'
import Image from 'next/image'
import { GoStarFill } from 'react-icons/go'
import dayjs from 'dayjs'

const ProductReviewItem: FC<IReviewItemProps> = ({ review }) => {
	const countFiveArray = Array.from({ length: 5 }, (_, i) => i + 1)

	return (
		<div className={styles.item}>
			<div className={styles.item__header}>
				<Image src={userAvatar} alt={userAvatar} width={48} height={48} />
				<div>
					<span>{review.user.name}</span>
					<div>{countFiveArray.map(i => <GoStarFill
						key={`review-star-${i}`} size={21}
						color={
							i <= review.starsCount
								? '#FF4D4D'
								: '#C3CAD4'
						} />)}
						<span>{dayjs(review.createdAt).format('DD.MM.YY')}</span>
					</div>
				</div>
			</div>
			<p>{review.message}</p>
		</div>
	)
}

export default ProductReviewItem