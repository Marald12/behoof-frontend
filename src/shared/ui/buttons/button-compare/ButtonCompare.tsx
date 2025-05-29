'use client'
import React, { FC } from 'react'
import styles from './ButtonCompare.module.scss'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { addProductToCompare } from '@/features/redux/slices/compare.slice'

const ButtonCompare: FC<{ id: string }> = ({ id }) => {
	const dispatch = useAppDispatch()

	return (
		<button className={styles.button__compare} onClick={() => dispatch(addProductToCompare(id))}>
			<TbBrandGoogleAnalytics size={24} color="#000000" />
		</button>
	)
}

export default ButtonCompare
