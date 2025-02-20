'use client'
import React, { FC } from 'react'
import styles from './ProfileColumnAccount.module.scss'
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
	const { mutate: mutateResetPassword, isPending } = useMutation({
		mutationKey: ['reset-password'],
		mutationFn: () => userService.createTokenAndSendEmail(),
		onSuccess: async data => {
			if (data.data) {
				toast.success('Ссылка на смену пароля отправлена вам на почту.')
			}
		}
	})

	const reloadProfileClickHandler = async () => {
		await queryClient.invalidateQueries({
			queryKey: ['profile']
		})
	}

	return (
		<div className={styles.column}>
			<h4>Ваш аккаунт</h4>
			<div onClick={() => !isPending && mutateResetPassword()}>
				Сбросить пароль
			</div>
			<div onClick={() => mutate()}>Выйти</div>
			<div onClick={reloadProfileClickHandler}>Обновить профиль</div>
		</div>
	)
}

export default ProfileColumnAccount
