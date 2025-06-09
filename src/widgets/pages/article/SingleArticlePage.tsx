'use client'
import React, { FC, useState } from 'react'
import styles from './SingleArticlePage.module.scss'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { articleService } from '@/api/article/article.service'
import Nav from '@/features/nav/Nav'
import cn from 'classnames'
import Image from 'next/image'
import avatarImg from '@/assets/images/user-avatar.png'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { IoEyeSharp } from 'react-icons/io5'
import { PiTimer } from 'react-icons/pi'
import TextArea from '@/shared/ui/inputs/textarea/TextArea'
import { RiSendPlaneFill } from 'react-icons/ri'
import { commentsService } from '@/api/comments/comments.service'
import { userService } from '@/api/user/user.service'
import { toast } from 'react-toastify'
import ArticleItem from '@/widgets/pages/articles/item/ArticleItem'
import Loader from '@/shared/ui/components/loader/Loader'

const SingleArticlePage: FC = () => {
	const { id } = useParams()
	const [comment, setComment] = useState<string>('')

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['article', id],
		queryFn: () => articleService.findById(id as string)
	})

	const { data: profileData } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.fetchProfile()
	})

	const { data: articlesData } = useQuery({
		queryKey: ['articles', data?.data?.findArticleById.category.id],
		queryFn: () => articleService.findAll({ categoryId: String(data?.data?.findArticleById.category.id) })
	})

	const { mutate: createComment } = useMutation({
		mutationKey: ['createComment'],
		mutationFn: ({ id, comment }) => commentsService.createComment(id, comment),
		onSuccess: async (data) => {
			if (!data.errors) {
				await refetch()
				setComment('')
			}
		}
	})

	const article = data?.data?.findArticleById

	const timeReading = Math.ceil(
		article?.content?.map(i => `${i.title} ${i.description}`)
			.map(i => i.length)
			.reduce((a, b) => a + b) / 250
	)

	const commentSubmitHandler = () => {
		if (profileData?.errors && profileData.errors.length >= 1)
			return toast.error('Вы не авторизованы.')

		createComment({ id, comment })
	}

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<Nav links={[{ href: 'articles', title: 'Статьи' }, { href: `article/${id}`, title: 'Статья' }]} />
			<h1>{article?.title}</h1>
			{isLoading && <Loader />}
			{data?.data && <div className={styles.header}>
				<div className={styles.header__user}>
					<Image src={avatarImg} alt={avatarImg} width={40} height={40} />
					<span>{article?.user.name}</span>
				</div>
				<div className={styles.header__counts}>
					<span>{dayjs(article?.createdAt).locale('ru').format('D MMMM YYYY[г.]')}</span>
					<span><IoEyeSharp color="#B5B5B5" /> {article?.viewsCount} прочтений</span>
					<span><PiTimer color="#B5B5B5" /> Время прочтения: {timeReading} мин.</span>
				</div>
				<div className={styles.header__tags}>
					<div>{article?.category.title}</div>
					{article?.tags?.map(tag => <div key={`tagggg-${tag}`}>{tag}</div>)}
				</div>
			</div>}
			{article?.banner && (
				<Image src={article.banner} alt={String(article.banner)}
							 width={0}
							 height={0}
							 sizes="100vw"
							 style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
							 quality={100}
				/>
			)}
			<div className={styles.content}>
				{article?.content?.map(item => <div key={item.id}>
					<h4>{item.title}</h4>
					{item.types === 'TEXT' && <p>{item.description}</p>}
					{item.types === 'LIST' && <ul>{item.description.split('|').map(i => <li key={i}>{i}</li>)}</ul>}
					<div>
						{item.images && item.images.map(i => <Image src={i} alt={i} width={0} height={350} quality={100}
																												sizes="100vw"
																												style={{
																													width: '100%',
																													objectFit: 'cover'
																												}} key={i} />)}
					</div>
				</div>)}
			</div>
			<div className={styles.comments}>
				<h4>Комментарии</h4>
				<div className={styles.comments__input}>
					<TextArea
						placeholder="Написать комментарий"
						value={comment}
						onChange={e => setComment(e.target.value)}
					/>
					<button onClick={commentSubmitHandler}>
						<RiSendPlaneFill size={18} color="#ffffff" />
					</button>
				</div>
				<div className={styles.comments__items}>
					{article?.comments?.map(comment => <div key={comment.id} className={styles.comments__items_item}>
						<div>
							<Image src={avatarImg} alt={avatarImg} width={40} height={40} />
							<span className={styles.comments__items_item_name}>{article?.user.name}</span>
							<span
								className={styles.comments__items_item_date}>{dayjs(article?.createdAt).locale('ru').format('D MMMM YYYY[г.] mm:ss')}</span>
						</div>
						<p>{comment.comment}</p>
					</div>)}
				</div>
			</div>
			<div className={styles.articles}>
				<h4>Статьи в этой категории</h4>
				<div className={styles.articles__items}>
					{articlesData?.data && articlesData.data.findAllArticles.filter(i => i.id !== article?.id).map(i =>
						<ArticleItem key={i.id} article={i} />)}
				</div>
			</div>
		</div>
	)
}

export default SingleArticlePage