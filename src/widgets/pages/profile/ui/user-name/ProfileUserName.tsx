'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './ProfileUserName.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import ButtonIcon from '@/shared/ui/buttons/icon/ButtonIcon'
import editImg from '@/assets/images/edit.svg'
import Image from 'next/image'
import { IoMdCheckmark } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { toast } from 'react-toastify'
import Loader from '@/shared/ui/components/loader/Loader'

const ProfileUserName: FC = () => {
	const ref = useRef<HTMLInputElement>(null)
	const [isEdit, setIsEdit] = useState(false)
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: async () => userService.fetchProfile()
	})
	const [value, setValue] = useState('')
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationKey: ['profile'],
		mutationFn: async () => userService.updateUser({ name: value }),
		onSuccess: async data => {
			if (data.data) {
				await queryClient.invalidateQueries({ queryKey: ['profile'] })
				setIsEdit(false)
				setValue(data.data.updateUser.name)
				toast.success('Имя успешно изменено.')
			}
			if (data.errors && ref.current) {
				ref.current.focus()
			}
		}
	})

	useEffect(() => {
		if (ref.current) {
			ref.current.focus()
		}
	}, [isEdit])

	useEffect(() => {
		if (data?.data) setValue(data.data.getProfile.name)
	}, [data])

	const submitHandler = () => {
		if (value) {
			mutate()
		}
	}

	return (
		<div className={styles.username}>
			{isEdit ? (
				<input
					type="text"
					ref={ref}
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			) : (
				data?.data && <h1>{data.data.getProfile.name}</h1>
			)}
			<ButtonIcon
				onClick={() => setIsEdit(prev => !prev)}
				disabled={isPending || isLoading}
			>
				{isEdit ? <IoClose size={18} /> : <Image src={editImg} alt={editImg} />}
			</ButtonIcon>
			{isEdit && (
				<ButtonIcon onClick={submitHandler} disabled={isPending || isLoading}>
					<IoMdCheckmark size={18} />
				</ButtonIcon>
			)}
			{isLoading || isPending ? <Loader /> : null}
		</div>
	)
}

export default ProfileUserName
