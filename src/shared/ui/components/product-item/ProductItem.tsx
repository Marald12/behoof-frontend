import React, { FC } from 'react'
import styles from './ProductItem.module.scss'
import { IProductItem } from '@/shared/ui/components/product-item/product-item.interface'
import Image from 'next/image'
import { GoStarFill } from 'react-icons/go'
import { formatPrice } from '@/shared/utils/formatPrice'
import ProductItemCharacteristic from '@/shared/ui/components/product-item/characteristic/ProductItemCharacteristic'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import Link from 'next/link'
import ProductItemButtonLike from '@/shared/ui/components/product-item/button-like/ProductItemButtonLike'
import ProductItemButtonCompare from '@/shared/ui/components/product-item/button-compare/ProductItemButtonCompare'

const ProductItem: FC<{ product: IProductItem }> = ({ product }) => {
	const starArray = Array.from({ length: 5 }, (_, i) => i + 1)

	return (
		<div className={styles.item}>
			<Image
				src={product.images![0]}
				alt={product.images![0]}
				width={170}
				height={200}
				className={styles.main__image}
			/>
			<div className={styles.item__content}>
				<div className={styles.item__content_header}>
					<div>{product.rating}.0 Оценка экспертов</div>
					{product.reviews && (
						<div>
							{product.characteristics.answerCount}.0
							{product.reviews && (
								<>
									<div className={styles.stars}>
										{starArray.map(i => (
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
									</div>
									<div className={styles.star}>
										<GoStarFill size={21} color='#FF4D4D' />
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
					<ProductItemButtonLike id={product.id} />
					<ProductItemButtonCompare />
				</div>
				<h2>{formatPrice(product.price)} ₴</h2>
			</div>
			<div className={styles.item__characteristics}>
				<ProductItemCharacteristic
					label='Дизайн'
					count={product.characteristics.designCount}
				/>
				<ProductItemCharacteristic
					label='Батарея'
					count={product.characteristics.batteryCount}
				/>
				<ProductItemCharacteristic
					label='Дисплей'
					count={product.characteristics.displayCount}
				/>
				<ProductItemCharacteristic
					label='Камера'
					count={product.characteristics.cameraCount}
				/>
				<ProductItemCharacteristic
					label='Ответ'
					count={product.characteristics.answerCount}
				/>
				<ProductItemCharacteristic
					label='Портативность'
					count={product.characteristics.portabilityCount}
				/>
				<Link href={`/product/${product.id}`}>
					<ButtonMain>Перейти к товару</ButtonMain>
				</Link>
			</div>
		</div>
	)
}

export default ProductItem
