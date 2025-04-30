import React, { FC } from 'react'
import { ISearchItemProps } from '@/features/search/product-item/search-item.interface'
import styles from './SearchItem.module.scss'
import Image from 'next/image'
import { formatPrice } from '@/shared/utils/formatPrice'
import ProductItemButtonCompare from '@/shared/ui/components/product-item/button-compare/ProductItemButtonCompare'
import ProductItemButtonLike from '@/shared/ui/components/product-item/button-like/ProductItemButtonLike'
import Link from 'next/link'

const SearchItem: FC<ISearchItemProps> = ({ product, setShow }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__header}>
				<Image src={product.images![0]} alt="product images one" width={109} height={128} />
			</div>
			<Link href={`/product/${product.id}`} onClick={() => setShow(false)} className={styles.item__content}>
				<span>{product.category.title}</span>
				<h4>{product.brand.title} {product.title} {product.characteristics.memory[0]} ГБ
					{' '}{product.colors![0].title.toLowerCase()}</h4>
			</Link>
			<div className={styles.item__footer}>
				<div className={styles.item__footer_price}>
					<span>Цена</span>
					<h4>{formatPrice(product.price)} ₴</h4>
				</div>
				<div className={styles.item__footer_buttons}>
					<ProductItemButtonLike id={product.id} />
					<ProductItemButtonCompare />
				</div>
			</div>
		</div>
	)
}

export default SearchItem