import React, { FC } from 'react'
import styles from './PopularProductItem.module.scss'
import { IPopularProductItemProps } from '@/widgets/pages/home/popular-products/item/populat-product-item.interface'
import Image from 'next/image'
import { formatPrice } from '@/shared/utils/formatPrice'
import ProductItemButtonLike from '@/shared/ui/components/product-item/button-like/ProductItemButtonLike'
import ProductItemButtonCompare from '@/shared/ui/components/product-item/button-compare/ProductItemButtonCompare'

const PopularProductItem: FC<IPopularProductItemProps> = ({ product }) => {
	return (
		<div className={styles.item}>
			<Image src={product.images![0]} alt="Main image popular product item" width={232} height={156} quality={100}
						 style={{ objectFit: 'contain' }} />
			<span className={styles.item__category}>{product.category.title}</span>
			<h4
				className={styles.item__title}>
				{product.brand.title} {product.title} {product.characteristics.memory[0]} ГБ{' '}
				{product.colors![0].title.toLowerCase()}
			</h4>
			<div className={styles.item__footer}>
				<div className={styles.item__footer_price}>
					<span className={styles.item__footer_price_span}>Цена</span>
					<h4 className={styles.item__footer_price_title}>{formatPrice(product.price)} ₴</h4>
				</div>
				<div className={styles.item__footer_buttons}>
					<ProductItemButtonLike id={product.id} />
					<ProductItemButtonCompare />
				</div>
			</div>
		</div>
	)
}

export default PopularProductItem