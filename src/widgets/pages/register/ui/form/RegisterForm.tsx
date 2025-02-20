'use client'
import React, { FC } from 'react'
import styles from './RegisterForm.module.scss'
import InputWhite from '@/shared/ui/inputs/white/InputWhite'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authService } from '@/api/auth/auth.service'
import { checkEmail } from '@/shared/utils/regex/checkEmail'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Loader from '@/shared/ui/components/loader/Loader'
import { IRegisterForm } from '@/widgets/pages/register/ui/form/register-form.interface'

const RegisterForm: FC = () => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { register, handleSubmit, formState, watch } = useForm<IRegisterForm>({
		mode: 'onChange'
	})
	const { mutate, isPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: async (data: IRegisterForm) =>
			authService.register(data.email, data.password, data.name),
		onSuccess: async data => {
			await queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			if (data.data) {
				toast.success('Вы успешно зарегестрировали аккаунт.')
				router.push('/')
				router.refresh()
			}
		}
	})
	const submitHandler = (data: IRegisterForm) => {
		mutate(data)
	}

	return (
		<>
			<div>
				<span>Регистрация аккаунта Behoof</span>
				{isPending && <Loader />}
			</div>
			<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
				<InputWhite
					label='Электронная почта'
					error={formState.errors.email?.message}
					type='email'
					{...register('email', {
						pattern: {
							value: checkEmail,
							message: 'Некорректный email.'
						},
						required: 'Поле обязательно для заполнения.'
					})}
				/>
				<InputWhite
					label='Имя'
					error={formState.errors.name?.message}
					type='text'
					{...register('name', {
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
				<InputWhite
					label='Повторите пароль'
					type='password'
					error={formState.errors.repeatPassword?.message}
					{...register('repeatPassword', {
						minLength: {
							value: 6,
							message: 'Минимальная длина пароля 6 символов.'
						},
						maxLength: {
							value: 16,
							message: 'Максимальная длина пароля 16 символов.'
						},
						required: 'Поле обязательно для заполнения.',
						validate: value => {
							if (value !== watch('password')) return 'Пароли не совпадают.'
						}
					})}
				/>
				<div className={styles.form__buttons}>
					<ButtonMain disabled={isPending} type='submit'>
						Зарегестрироваться
					</ButtonMain>
					<Link href='/restore-password'>Восстановить пароль</Link>
				</div>
			</form>
		</>
	)
}

export default RegisterForm
