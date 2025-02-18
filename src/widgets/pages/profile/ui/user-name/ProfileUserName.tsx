'use client'
import React, { FC } from 'react'
import styles from './ProfileUserName.module.scss'
import { useQuery } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'

const ProfileUserName: FC = () => {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.fetchProfile()
	})

	console.log(data)

	return <div className={styles.username}></div>
}

export default ProfileUserName
