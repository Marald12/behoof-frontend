import React, { FC } from 'react'
import styles from './LikeProductItem.module.scss'
import { ILikeProductProps } from '@/widgets/pages/likes/item/like-product.interface'
import Image from 'next/image'
import ButtonLike from '@/shared/ui/buttons/button-like/ButtonLike'
import Link from 'next/link'
import ButtonCompare from '@/shared/ui/buttons/button-compare/ButtonCompare'
import { formatPrice } from '@/shared/utils/formatPrice'

const LikeProductItem: FC<ILikeProductProps> = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__header}>
				<Image src={item.images![0]} alt="Изображение продукта" width={190} height={148}
							 style={{ objectFit: 'contain' }} quality={100} />
				<div className={styles.item__header_title}>
					<div>
						<span>{item.category.title}</span>
						<Link href={`/product/${item.id}`}>
							<h4>{item.brand.title} {item.title} {item.characteristics.memory.value[0]} ГБ {item.colors![0].title}</h4>
						</Link>
					</div>
					<div className={styles.item__header_title_buttons}>
						<ButtonLike id={item.id} isActive={true} />
						<ButtonCompare id={item.id} />
					</div>
					<div className={styles.item__header_price}>
						<span>Цена:</span>
						<h4>{formatPrice(item.price)} ₴</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LikeProductItem