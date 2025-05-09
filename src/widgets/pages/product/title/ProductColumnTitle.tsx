import React, { FC, useContext, useEffect } from 'react'
import styles from './ProductColumnTitle.module.scss'
import { IProductNoApiProps } from '@/shared/types/product.type'
import { GoStarFill } from 'react-icons/go'
import cn from 'classnames'
import Image from 'next/image'
import crownImage from '@/assets/images/crown.svg'
import { formatPrice } from '@/shared/utils/formatPrice'
import Link from 'next/link'
import ButtonBigCompare from '@/shared/ui/buttons/button-big-compare/ButtonBigCompare'
import ButtonBigLike from '@/shared/ui/buttons/button-big-like/ButtonBigLike'
import { ProductContext } from '@/shared/contexts/productContext'

const ProductColumnTitle: FC<IProductNoApiProps> = ({ product }) => {
	const { memory, setMemory, color, setColor } = useContext(ProductContext)
	const arrayFive = Array.from({ length: 5 }).map((_, i) => i + 1)
	const ch = product?.characteristics

	const memoryArray = ch.memory.value as number[] | undefined

	console.log(ch.header)

	useEffect(() => {
		setMemory(ch.memory[0])
		if (product?.colors) setColor(product.colors[0].title)
	}, [ch.memory.value, product?.colors])

	return (
		<div className={styles.column}>
			<h4>
				{product?.brand.title} {product?.title} {memory} ГБ{' '}
				{color.toLocaleLowerCase()}
			</h4>
			<div className={styles.column__title_rating}>
				<div className={styles.answer__rating}>
					{ch.header.find(i => i.key === 'answerCount').value}.0 Оценка экспертов
				</div>
				<div className={styles.rating}>
					{product?.rating}.0{' '}
					<div className={styles.rating__stars}>
						{product && arrayFive.map(i => (
							<GoStarFill
								key={`star-item-${i}`}
								size={21}
								color={i <= product.rating ? '#FF4D4D' : '#C3CAD4'}
							/>
						))}
					</div>
					{' '}
					{product?.reviews?.length || 0} Отзывов
				</div>
			</div>
			<div className={styles.column__characteristics}>
				{ch.header?.map(i => <div key={i.key}>
					<span>{i.russianTranslate}</span>
					<div>
						{arrayFive.map(j => (
							<div
								key={`design-${j}`}
								className={cn(
									j <= i.value && styles.red
								)}
							/>
						))}
					</div>
				</div>)}
			</div>
			<div className={styles.column__price}>
				<div>
					<Image src={crownImage} alt={crownImage} />
					<span>Самый дешевый</span>
				</div>
				<h4>{formatPrice(Number(product?.price))} ₴</h4>
			</div>
			<div className={styles.column__color_and_memory}>
				<div>
					<h4>Цвет:</h4>
					<div className={styles.color}>
						{product?.colors?.map(i => (
							<div
								key={i.id}
								className={cn(i.title === color && styles.active)}
								onClick={() => setColor(i.title)}
							>
								<div style={{ backgroundColor: i.color }} />
							</div>
						))}
					</div>
				</div>
				<div>
					<h4>Память:</h4>
					<div className={styles.memory}>
						{memoryArray && memoryArray.map(i => (
							<div
								key={`memory-product-${i}`}
								className={cn(i === memory && styles.active)}
								onClick={() => setMemory(i)}
							>
								{i}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.column__buttons}>
				<Link href={``}>
					<ButtonBigCompare />
				</Link>
				<ButtonBigLike id={String(product?.id)} />
			</div>
		</div>
	)
}

export default ProductColumnTitle
