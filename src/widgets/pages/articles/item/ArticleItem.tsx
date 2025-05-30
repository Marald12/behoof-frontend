import React, { FC } from 'react'
import styles from './ArticleItem.module.scss'
import { IArticleItemProps } from '@/widgets/pages/articles/item/article-item.interface'
import Image from 'next/image'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import Link from 'next/link'

const ArticleItem: FC<IArticleItemProps> = ({ article }) => {
	return (
		<div className={styles.item}>
			<Image src={article.banner} alt="article banner" width={0}
						 height={0}
						 sizes="100vw"
						 style={{ width: '100%', height: 'auto' }} />
			<Link href={`/article/${article.id}`}>
				<h4>{article.title}</h4>
				<span>{dayjs(article.createdAt).locale('ru').format('D MMMM YYYY[г.]')}</span>
				<div>{article.tags?.map(i => <span key={`fdffd-${i}`}>{i}</span>)}</div>
			</Link>
		</div>
	)
}

export default ArticleItem