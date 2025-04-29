import React from 'react'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import styles from './ButtonBigCompare.module.scss'

const ButtonBigCompare = () => {
	return (
		<button className={styles.button}>
			<TbBrandGoogleAnalytics size={24} color='#ffffff' />
			Сравнить
		</button>
	)
}

export default ButtonBigCompare
