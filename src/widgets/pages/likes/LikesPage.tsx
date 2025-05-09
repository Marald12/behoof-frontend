'use client'
import React from 'react'
import styles from './LikesPage.module.scss'
import { NextPage } from 'next'
import Nav from '@/features/nav/Nav'
import cn from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import Loader from '@/shared/ui/components/loader/Loader'

const LikesPage: NextPage = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.fetchProfile()
	})

	const categories = data?.data?.getProfile.favoriteProducts?.map(i => i.category)
		.filter((obj, index, self) => index === self.findIndex(o => o.id === obj.id))

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<Nav links={[{ title: 'Избранное', href: '/likes' }]} />
			<h3>Избранное</h3>
			{isLoading && <Loader />}
		</div>
	)
}

export default LikesPage