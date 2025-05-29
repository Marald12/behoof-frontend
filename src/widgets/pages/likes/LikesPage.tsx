'use client'
import React, { useEffect, useState } from 'react'
import styles from './LikesPage.module.scss'
import { NextPage } from 'next'
import Nav from '@/features/nav/Nav'
import cn from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import Loader from '@/shared/ui/components/loader/Loader'
import LikeProductItem from '@/widgets/pages/likes/item/LikeProductItem'
import Link from 'next/link'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'

const LikesPage: NextPage = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['likes'],
		queryFn: () => userService.fetchProfile()
	})
	const categories = data?.data?.getProfile.favoriteProducts?.map(i => i.category)
		.filter((obj, index, self) => index === self.findIndex(o => o.id === obj.id))

	const [currentCategory, setCurrentCategory] = useState<string>('')

	let products = data?.data?.getProfile.favoriteProducts?.map(i => i)
		.filter(i => currentCategory === '' ? i : i.category.id === currentCategory)

	useEffect(() => {
		products = data?.data?.getProfile.favoriteProducts?.map(i => i)
			.filter(i => i.category.id === currentCategory)
	}, [currentCategory])

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<Nav links={[{ title: 'Избранное', href: '/likes' }]} />
			<h3>Избранное</h3>
			{isLoading && <Loader />}
			<div className={styles.categories}>
				{products?.length !== 0 &&
					<div className={cn(currentCategory === '' && styles.active)} onClick={() => setCurrentCategory('')}>Все</div>}
				{categories?.map(item => <div key={item.id}
																			className={cn(currentCategory === item.id && styles.active)}
																			onClick={() => setCurrentCategory(item.id)}
				>{item.title}</div>)}
			</div>
			<div className={styles.items}>
				{products?.map(item => <LikeProductItem item={item} key={item.id} />)}
			</div>
			{products?.length === 0 && <div className={styles.not_found}>
				<h5>Ваш список избранного пуст</h5>
				<span>Вы можете добавить продукт, перейдя по кнопке ниже</span>
				<Link href="/categories">
					<ButtonMain>Перейти на каталог</ButtonMain>
				</Link>
			</div>}
		</div>
	)
}

export default LikesPage