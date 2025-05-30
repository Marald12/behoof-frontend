'use client'
import React, { FC } from 'react'
import styles from './SingleArticlePage.module.scss'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { articleService } from '@/api/article/article.service'
import Nav from '@/features/nav/Nav'
import cn from 'classnames'
import Image from 'next/image'
import avatarImg from '@/assets/images/user-avatar.png'

const SingleArticlePage: FC = () => {
	const { id } = useParams()

	const { data, isLoading } = useQuery({
		queryKey: ['article', id],
		queryFn: () => articleService.findById(id as string)
	})

	const article = data?.data?.findArticleById

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<Nav links={[{ href: '/articles', title: 'Статьи' }, { href: `/article/${id}`, title: 'Статья' }]} />
			<h1>{article?.title}</h1>
			<div className={styles.header}>
				<div className={styles.header__user}>
					<Image src={avatarImg} alt={avatarImg} width={40} height={40} />
					<span>{article?.user.name}</span>
				</div>
				<div className={styles.header__counts}></div>
				<div className={styles.header__tags}></div>
			</div>
		</div>
	)
}

export default SingleArticlePage