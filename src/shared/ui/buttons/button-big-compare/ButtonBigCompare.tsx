import React, { FC } from 'react'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import styles from './ButtonBigCompare.module.scss'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { addProductToCompare } from '@/features/redux/slices/compare.slice'

const ButtonBigCompare: FC<{ id: string }> = ({ id }) => {
	const dispatch = useAppDispatch()

	return (
		<button
			className={styles.button}
			onClick={() => dispatch(addProductToCompare(id))}
		>
			<TbBrandGoogleAnalytics size={24} color='#ffffff' />
			Сравнить
		</button>
	)
}

export default ButtonBigCompare
