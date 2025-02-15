import React from 'react'
import { NextPage } from 'next'
import styles from './not-found.module.scss'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import Link from 'next/link'

const NotFound: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Упс...</h1>
			<h5>Страница не найдена</h5>
			<span>Тут что то упало и это не страшно! Но мы все сохранили ;)</span>
			<Link href='/'>
				<ButtonMain>Перейти на главную</ButtonMain>
			</Link>
		</div>
	)
}

export default NotFound
