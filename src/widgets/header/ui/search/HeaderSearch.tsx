'use client'
import React, { FC } from 'react'
import styles from './HeaderSearch.module.scss'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import { FaCaretDown } from 'react-icons/fa'
import InputGray from '@/shared/ui/inputs/gray/InputGray'
import { FiSearch } from 'react-icons/fi'
import Catalog from '@/features/catalog/Catalog'
import { useOutside } from '@/shared/hooks/useOutside'

const HeaderSearch: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	return (
		<>
			<div className={styles.search}>
				<ButtonMain onClick={() => setIsShow(prev => !prev)}>
					Каталог товаров
					<FaCaretDown />
				</ButtonMain>
				<div className={styles.input}>
					<InputGray placeholder='Поиск товаров' />
					<div>
						<FiSearch size={24} color='#7E8794' />
					</div>
				</div>
			</div>
			<Catalog isShow={isShow} ref={ref} />
		</>
	)
}

export default HeaderSearch
