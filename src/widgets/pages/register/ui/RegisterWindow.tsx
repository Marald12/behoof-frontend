import React, { FC } from 'react'
import styles from './RegisterWindow.module.scss'
import Link from 'next/link'
import ButtonWhite from '@/shared/ui/buttons/white/ButtonWhite'
import RegisterForm from '@/widgets/pages/register/ui/form/RegisterForm'

const RegisterWindow: FC = () => {
	return (
		<div className={styles.register}>
			<div className={styles.register__container}>
				<div className={styles.register__container_column_link}>
					<span>Вы уже с нами?</span>
					<p>
						Войдите в аккаунт, чтобы получать уведомления об изменении цен и
						синхронизировать ваши товары на всех устройствах.
					</p>
					<Link href='/login'>
						<ButtonWhite>Авторизоваться</ButtonWhite>
					</Link>
				</div>
				<div className={styles.register__container_column_form}>
					<RegisterForm />
				</div>
			</div>
		</div>
	)
}

export default RegisterWindow
