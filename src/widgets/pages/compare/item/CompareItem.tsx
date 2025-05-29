'use client'
import React, { FC } from 'react'
import styles from './CompareItem.module.scss'
import { IProduct, removeProduct } from '@/features/redux/slices/compare.slice'
import Image from 'next/image'
import { formatPrice } from '@/shared/utils/formatPrice'
import ButtonLike from '@/shared/ui/buttons/button-like/ButtonLike'
import { CiTrash } from 'react-icons/ci'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { parseToCardData } from '@/shared/utils/objectToArray'

const CompareItem: FC<{ product: IProduct, key: any }> = ({ product }) => {
	const dispatch = useAppDispatch()

	const char = parseToCardData(product)

	return (
		<div className={styles.item}>
			<div className={styles.item__header}>
				<Image src={product.images![0]} alt="Image product" width={232} height={156} quality={100}
							 style={{ objectFit: 'contain' }} />
				<span>{product.category.title}</span>
				<h4>{product.brand.title} {product.title}</h4>
				<span>Цена</span>
				<h4>{formatPrice(product.price)} ₴</h4>
				<div className={styles.item__header_like}>
					<ButtonLike id={product.id} isActive={false} />
				</div>
				<button className={styles.item__header_trash} onClick={() => dispatch(removeProduct(product.id))}>
					<CiTrash color="#263141" size={18} />
				</button>
			</div>
			<div className={styles.item__content}>
				{char.map((item, index) => <div key={`char-${index}`}>
					<div className={styles.title}>
						<h5>
							{item.title}
						</h5>
					</div>
					<div className={styles.subtitle}>
						<span>
						{item.value}
					</span>
					</div>
				</div>)}
			</div>
		</div>
	)
}

export default CompareItem