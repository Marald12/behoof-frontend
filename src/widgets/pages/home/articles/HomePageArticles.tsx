'use client'
import React from 'react'
import styles from './HomePageArticles.module.scss'
import cn from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { articleService } from '@/api/article/article.service'
import Loader from '@/shared/ui/components/loader/Loader'
import HomePageArticleItem from '@/widgets/pages/home/articles/item/HomePageArticleItem'

const HomePageArticles = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['reviewsHome'],
		queryFn: () => articleService.findAll({ take: 4 })
	})

	return (
		<section className={cn(styles.articles, 'container')}>
			<h4>Популярные статьи</h4>
			<div>
				{isLoading && <Loader />}
				{data?.data && data.data.findAllArticles.map(article => <HomePageArticleItem item={article}
																																										 key={article.id} />)}
			</div>
		</section>
	)
}

export default HomePageArticles