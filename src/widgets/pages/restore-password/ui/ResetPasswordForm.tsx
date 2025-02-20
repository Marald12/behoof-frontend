'use client'
import React, { FC, useState } from 'react'
import styles from './ResetPasswordForm.module.scss'
import cn from 'classnames'
import InputWhite from '@/shared/ui/inputs/white/InputWhite'
import { useForm } from 'react-hook-form'
import { checkEmail } from '@/shared/utils/regex/checkEmail'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import { useMutation } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import Loader from '@/shared/ui/components/loader/Loader'
import { toast } from 'react-toastify'
import { ImCheckmark } from 'react-icons/im'

interface IForm {
	email: string
}

const ResetPasswordForm: FC = () => {
	const [isSendMail, setIsSendMail] = useState(false)
	const { register, formState, handleSubmit } = useForm<IForm>({
		mode: 'onChange'
	})
	const { mutate, isPending } = useMutation({
		mutationKey: ['restore-password'],
		mutationFn: (email: string) =>
			userService.findByEmailAndCreateAndSendEmail(email),
		onSuccess: data => {
			if (data.data) {
				toast.success('Ссылка на восстановление отправлена вам на почту.')
				setIsSendMail(true)
			}
		}
	})

	const submitHandler = (data: IForm) => {
		mutate(data.email)
	}

	return (
		<div className={cn('container', styles.container)}>
			{isSendMail ? (
				<div className={styles.form}>
					<div className={styles.form__title}>
						<span>
							Ссылка для восстановления пароля <ImCheckmark color='#388a42' />
						</span>
					</div>
					<p>
						Мы отправили вам письмо с ссылкой для восстановления пароля.
						<br />
						Проверьте свою почту и следуйте инструкциям.
					</p>
				</div>
			) : (
				<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
					<div className={styles.form__title}>
						<span>Восстановление пароля</span>
						{isPending && <Loader />}
					</div>
					<InputWhite
						label='Введите вашу электронную почту'
						error={formState.errors.email?.message}
						{...register('email', {
							pattern: {
								value: checkEmail,
								message: 'Некорректный email.'
							},
							required: {
								value: true,
								message: 'Поле обязательно для заполнения.'
							}
						})}
					/>
					<ButtonMain disabled={isPending}>Восстановить</ButtonMain>
				</form>
			)}
		</div>
	)
}

export default ResetPasswordForm
