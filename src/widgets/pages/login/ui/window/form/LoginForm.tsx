'use client'
import React, { FC } from 'react'
import styles from './LoginForm.module.scss'
import InputWhite from '@/shared/ui/inputs/white/InputWhite'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { ILoginForm } from '@/widgets/pages/login/ui/window/form/login-form.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authService } from '@/api/auth/auth.service'
import { checkEmail } from '@/shared/utils/regex/checkEmail'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const LoginForm: FC = () => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { register, handleSubmit, formState } = useForm<ILoginForm>()
	const { mutate } = useMutation({
		mutationKey: ['login'],
		mutationFn: async (data: ILoginForm) =>
			authService.login(data.email, data.password),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.success('Вы успешно вошли в аккаунт.')
			router.push('/')
			router.refresh()
		}
	})
	const submitHandler = (data: ILoginForm) => {
		mutate(data)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
			<InputWhite
				label='Электронная почта'
				error={formState.errors.email?.message}
				{...register('email', {
					pattern: {
						value: checkEmail,
						message: 'Некорректный email.'
					},
					required: 'Поле обязательно для заполнения.'
				})}
			/>
			<InputWhite
				label='Пароль'
				type='password'
				error={formState.errors.password?.message}
				{...register('password', {
					minLength: {
						value: 6,
						message: 'Минимальная длина пароля 6 символов.'
					},
					maxLength: {
						value: 16,
						message: 'Максимальная длина пароля 16 символов.'
					},
					required: 'Поле обязательно для заполнения.'
				})}
			/>
			<div className={styles.form__buttons}>
				<ButtonMain>Войти</ButtonMain>
				<Link href='/restore-password'>Восстановить пароль</Link>
			</div>
		</form>
	)
}

export default LoginForm
