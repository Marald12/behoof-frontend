'use client'
import React, { FC } from 'react'
import styles from './ButtonLike.module.scss'
import { IoIosHeartEmpty } from 'react-icons/io'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import { toast } from 'react-toastify'
import cn from 'classnames'

const ButtonLike: FC<{ id: string, isActive?: boolean }> = ({ id, isActive = false }) => {
	const queryClient = useQueryClient()
	const { mutate: mutateAdd } = useMutation({
		mutationFn: () => userService.addProductToFavorite(id),
		onSuccess: data => {
			if (data?.errors) {
				if (data.errors[0].message === 'Продукт уже в избранном.')
					return mutateRemove()
				data.errors.map((i: any) => toast.error(i.message))
			}
			if (data?.data) toast.success('Продукт успешно добавлен в избранное.')
			queryClient.invalidateQueries(['likes'])
		}
	})
	const { mutate: mutateRemove } = useMutation({
		mutationFn: () => userService.removeProductFromFavorite(id),
		onSuccess: data => {
			if (data?.errors) {
				data.errors.map((i: any) => toast.error(i.message))
			}
			if (data?.data) toast.success(`Продукт успешно удален из избранного.`)
			queryClient.invalidateQueries(['likes'])
		}
	})

	return (
		<button className={cn(styles.button__like, !isActive && styles.no_active)} onClick={() => mutateAdd()}>
			<IoIosHeartEmpty size={24} color={isActive ? '#ffffff' : '#000000'} />
		</button>
	)
}

export default ButtonLike
