'use client'
import React, { useState } from 'react'
import styles from './ArticlesPage.module.scss'
import { NextPage } from 'next'
import cn from 'classnames'
import Nav from '@/features/nav/Nav'
import { useQuery } from '@tanstack/react-query'
import { articleService } from '@/api/article/article.service'
import Loader from '@/shared/ui/components/loader/Loader'
import { categoryService } from '@/api/category/category.service'
import InputGray from '@/shared/ui/inputs/gray/InputGray'
import useDebounce from '@/shared/hooks/useDebounce'
import ArticleItem from '@/widgets/pages/articles/item/ArticleItem'

const ArticlesPage: NextPage = () => {
	const [currentTags, setCurrentTags] = useState<string[] | undefined>(undefined)
	const [currentCategory, setCurrentCategory] = useState<string | undefined>(undefined)
	const [search, setSearch] = useState<string>('')
	const debounce = useDebounce(search, 200)

	const { data, isLoading } = useQuery({
		queryKey: ['articles', currentTags, debounce, currentCategory],
		queryFn: () => articleService.findAll({
			tag: currentTags?.join(','),
			search: debounce,
			categoryId: currentCategory
		})
	})

	const { data: noFilterData } = useQuery({
		queryKey: ['articles'],
		queryFn: () => articleService.findAll()
	})

	const { data: categoryData, isLoading: categoryIsLoading } = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryService.findAllCategories()
	})

	const tags = noFilterData?.data?.findAllArticles.flatMap(i => i.tags).filter((tag, index, self) => self.indexOf(tag) === index)

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<Nav links={[{ href: 'articles', title: 'Статьи' }]} />
			<h2>Статьи</h2>
			<div className={styles.header}>
				<div className={styles.header__search}>
					<h5>Поиск <span>статей</span></h5>
					<InputGray placeholder="Ищите рубрику или название статьи" value={search}
										 onChange={e => setSearch(e.currentTarget.value)} />
				</div>
				<div className={styles.header__tags}>
					<h5><span>Популярные</span> теги</h5>
					<div>
						{tags?.map(tag => <button
							key={tag}
							onClick={() => {
								if (typeof tag === 'string') {
									setCurrentTags(prev => {
										if (prev === undefined) return [tag]

										if (prev.some(i => i === tag)) {
											if (prev.length === 1) return undefined

											return prev.filter(i => i !== tag)
										}

										return [...prev, tag]
									})
								}
							}}
							className={cn(currentTags?.some(i => i === tag) && styles.active)}
						>{tag}</button>)}
					</div>
				</div>
			</div>
			<div className={styles.categories}>
				{categoryIsLoading && <Loader />}
				<button
					onClick={() => setCurrentCategory(undefined)}
					className={cn(currentCategory === undefined && styles.active)}
				>Все
				</button>
				{categoryData?.data?.findAllCategories.map(category => <button
					key={category.id}
					className={cn(currentCategory === category.id && styles.active)}
					onClick={() => setCurrentCategory(category.id)}
				>{category.title}</button>)}
			</div>
			<div className={styles.content}>
				{isLoading && <Loader />}
				{data?.data?.findAllArticles.map((article) => <ArticleItem article={article} key={article.id} />)}
			</div>
		</div>
	)
}

export default ArticlesPage