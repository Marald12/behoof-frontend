'use client'
import React, { FC } from 'react'
import styles from './ChangePasswordForm.module.scss'
import cn from 'classnames'
import InputWhite from '@/shared/ui/inputs/white/InputWhite'
import { useForm } from 'react-hook-form'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import { useMutation } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Loader from '@/shared/ui/components/loader/Loader'

interface IForm {
	password: string
	repeatPassword: string
}

const ChangePasswordForm: FC = () => {
	const params = useParams<{ token?: string }>()
	const router = useRouter()
	const { register, formState, handleSubmit, watch } = useForm<IForm>({
		mode: 'onChange'
	})
	const { mutate, isPending } = useMutation({
		mutationKey: ['changePassword'],
		mutationFn: (data: { token: string; password: string }) =>
			userService.changePassword(data.token, data.password),
		onSuccess: data => {
			if (data.data) {
				toast.success('Пароль успешно изменен.')
				router.push('/login')
			}
		}
	})

	const submitHandler = (data: IForm) => {
		if (params.token) {
			mutate({ token: params.token, password: data.password })
		}
	}

	return (
		<div className={cn(styles.container, 'container')}>
			<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
				<div className={styles.form__title}>
					<h4>Сменить пароль</h4>
					{isPending && <Loader />}
				</div>
				<InputWhite
					label='Введите пароль'
					error={formState.errors.password?.message}
					type='password'
					{...register('password', {
						required: {
							value: true,
							message: 'Поле обьязательно для заполнения.'
						}
					})}
				/>
				<InputWhite
					label='Повторите пароль'
					error={formState.errors.repeatPassword?.message}
					type='password'
					{...register('repeatPassword', {
						required: {
							value: true,
							message: 'Поле обьязательно для заполнения.'
						},
						validate: value => {
							if (value !== watch('password')) return 'Пароли не совпадают.'
						}
					})}
				/>
				<ButtonMain disabled={isPending}>Сменить</ButtonMain>
			</form>
		</div>
	)
}

export default ChangePasswordForm
