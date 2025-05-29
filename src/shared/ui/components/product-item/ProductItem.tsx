import React, { FC } from 'react'
import styles from './ProductItem.module.scss'
import { IProductItem } from '@/shared/ui/components/product-item/product-item.interface'
import Image from 'next/image'
import { GoStarFill } from 'react-icons/go'
import { formatPrice } from '@/shared/utils/formatPrice'
import ProductItemCharacteristic from '@/shared/ui/components/product-item/characteristic/ProductItemCharacteristic'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import Link from 'next/link'
import ButtonLike from '@/shared/ui/buttons/button-like/ButtonLike'
import ButtonCompare from '@/shared/ui/buttons/button-compare/ButtonCompare'

const ProductItem: FC<{ product: IProductItem }> = ({ product }) => {
	const starArray = Array.from({ length: 5 }, (_, i) => i + 1)

	const ch = product.characteristics

	return (
		<div className={styles.item}>
			<Image
				src={product.images![0]}
				alt={product.images![0]}
				width={170}
				height={200}
				className={styles.main__image}
				quality={100}
				style={{ objectFit: 'contain' }}
			/>
			<div className={styles.item__content}>
				<div className={styles.item__content_header}>
					<div>{product.rating}.0 Оценка экспертов</div>
					{product.reviews && (
						<div>
							{ch.answerCount}
							{product.reviews && (
								<>
									<div className={styles.stars}>
										{starArray.map(i => (
											<GoStarFill
												key={`star-item-${i}`}
												size={21}
												color={
													i <= ch.header.find(i => i.key === 'answerCount').value
														? '#FF4D4D'
														: '#C3CAD4'
												}
											/>
										))}
									</div>
									<div className={styles.star}>
										<GoStarFill size={21} color="#FF4D4D" />
									</div>
									<span> {product.reviews?.length} Отзывов</span>
								</>
							)}
						</div>
					)}
				</div>
				<Link
					href={`/product/${product.id}`}
					className={styles.item__content_container}
				>
					<Image
						src={product.images![0]}
						alt={product.images![0]}
						width={170}
						height={200}
						className={styles.mobile__image}
					/>
					<div>
						<h2>
							{product.brand.title} {product.title}
						</h2>
						<p>{product.description.slice(0, 500)}...</p>
					</div>
				</Link>
			</div>
			<div className={styles.item__price}>
				<div className={styles.item__price_buttons}>
					<ButtonLike id={product.id} />
					<ButtonCompare id={product.id} />
				</div>
				<h2>{formatPrice(product.price)} ₴</h2>
			</div>
			<div className={styles.item__characteristics}>
				<ProductItemCharacteristic
					label="Дизайн"
					count={ch.header.find(i => i.key === 'designCount').value}
				/>
				<ProductItemCharacteristic
					label="Батарея"
					count={ch.header.find(i => i.key === 'batteryCount').value}
				/>
				<ProductItemCharacteristic
					label="Дисплей"
					count={ch.header.find(i => i.key === 'displayCount').value}
				/>
				<ProductItemCharacteristic
					label="Камера"
					count={ch.header.find(i => i.key === 'cameraCount').value}
				/>
				<ProductItemCharacteristic
					label="Ответ"
					count={ch.header.find(i => i.key === 'answerCount').value}
				/>
				<ProductItemCharacteristic
					label="Портативность"
					count={ch.header.find(i => i.key === 'portabilityCount').value}
				/>
				<Link href={`/product/${product.id}`}>
					<ButtonMain>Перейти к товару</ButtonMain>
				</Link>
			</div>
		</div>
	)
}

export default ProductItem
