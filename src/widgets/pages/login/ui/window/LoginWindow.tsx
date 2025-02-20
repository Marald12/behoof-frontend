import React, { FC } from 'react'
import styles from './LoginWindow.module.scss'
import Link from 'next/link'
import ButtonWhite from '@/shared/ui/buttons/white/ButtonWhite'
import LoginForm from '@/widgets/pages/login/ui/window/form/LoginForm'

const LoginWindow: FC = () => {
	return (
		<div className={styles.login}>
			<div className={styles.login__container}>
				<div className={styles.login__container_column_link}>
					<span>Вы ещё не с нами?</span>
					<p>
						Создайте аккаунт чтобы получать уведомления об изменении цен и
						синхронизировать ваши товары на всех устройствах.
					</p>
					<Link href='/register'>
						<ButtonWhite>Зарегестрировться</ButtonWhite>
					</Link>
				</div>
				<div className={styles.login__container_column_form}>
					<LoginForm />
				</div>
			</div>
		</div>
	)
}

export default LoginWindow
