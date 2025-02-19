'use client'
import React, { FC } from 'react'
import styles from './ProfileColumnAccount.module.scss'
import Link from 'next/link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const ProfileColumnAccount: FC = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const { mutate } = useMutation({
		mutationKey: ['profile'],
		mutationFn: () => userService.logout(),
		onSuccess: async data => {
			if (data.data) {
				await queryClient.invalidateQueries({
					queryKey: ['profile']
				})
				router.push('/')
				router.refresh()
				toast.success(data.data.logout)
			}
		}
	})

	return (
		<div className={styles.column}>
			<h4>Ваш аккаунт</h4>
			<div>
				<Link href='/profile/reset-password'>Сбросить пароль</Link>
			</div>
			<div onClick={() => mutate()}>Выйти</div>
			<div>Обновить профиль</div>
		</div>
	)
}

export default ProfileColumnAccount
