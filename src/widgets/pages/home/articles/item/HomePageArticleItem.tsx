import React, { FC } from 'react'
import styles from './HomePageArticleItem.module.scss'
import { IArticleItemProps } from '@/features/search/article-item/article-item.interface'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

const SearchArticleItem: FC<IArticleItemProps> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.banner}
				alt="review banner"
				width={342}
				height={320}
				quality={100}
			/>
			<div>
				<span>{item.title}</span>
				<Link href={`/article/${item.id}`}>Смотреть <MdKeyboardArrowRight color="#FF4D4D" size={21} /></Link>
			</div>
		</div>
	)
}

export default SearchArticleItem