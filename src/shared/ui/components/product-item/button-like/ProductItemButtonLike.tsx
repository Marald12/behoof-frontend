'use client'
import React, { FC } from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'
import styles from './ProductItemButtonLike.module.scss'
import { useMutation } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import { toast } from 'react-toastify'

const ProductItemButtonLike: FC<{ id: string }> = ({ id }) => {
	const { mutate: mutateAdd } = useMutation({
		mutationFn: () => userService.addProductToFavorite(id),
		onSuccess: data => {
			if (data?.errors) {
				if (data.errors[0].message === 'Продукт уже в избранном.')
					return mutateRemove()
				data.errors.map((i: any) => toast.error(i.message))
			}
			if (data?.data) toast.success('Продукт успешно добавлен в избранное.')
		}
	})
	const { mutate: mutateRemove } = useMutation({
		mutationFn: () => userService.removeProductFromFavorite(id),
		onSuccess: data => {
			if (data?.errors) {
				data.errors.map((i: any) => toast.error(i.message))
			}
			if (data?.data) toast.success(`Продукт успешно удален из избранного.`)
		}
	})

	return (
		<button className={styles.button} onClick={() => mutateAdd()}>
			<IoIosHeartEmpty size={24} />
		</button>
	)
}

export default ProductItemButtonLike
