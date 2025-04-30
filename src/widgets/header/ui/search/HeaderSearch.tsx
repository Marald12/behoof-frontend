'use client'
import React, { FC, useState } from 'react'
import styles from './HeaderSearch.module.scss'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import { FaCaretDown } from 'react-icons/fa'
import InputGray from '@/shared/ui/inputs/gray/InputGray'
import { FiSearch } from 'react-icons/fi'
import Catalog from '@/features/catalog/Catalog'
import { useOutside } from '@/shared/hooks/useOutside'
import Search from '@/features/search/Search'
import cn from 'classnames'

const HeaderSearch: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)
	const { ref: searchRef, isShow: searchIsShow, setIsShow: setSearchIsShow } = useOutside(false)
	const [value, setValue] = useState('')

	const handleInput = (e) => {
		setValue(e.target.value)
		if (e.target.value.trim() === '') {
			return setSearchIsShow(false)
		}
		setSearchIsShow(true)
	}

	const focusHandler = (e) => {
		if (e.target.value.trim() !== '')
			return setSearchIsShow(true)
	}

	return (
		<>
			<div className={styles.search}>
				<ButtonMain onClick={() => setIsShow(prev => !prev)}>
					Каталог товаров
					<FaCaretDown />
				</ButtonMain>
				<div className={styles.input} ref={searchRef}>
					<InputGray className={cn(searchIsShow && styles.active)} placeholder="Поиск товаров" onInput={handleInput}
										 onClick={focusHandler} value={value} />
					<div>
						<FiSearch size={24} color="#7E8794" />
					</div>
				</div>
			</div>
			<Search isShow={searchIsShow} ref={searchRef} setIsShow={setSearchIsShow} value={value} />
			<Catalog isShow={isShow} ref={ref} setIsShow={setIsShow} />
		</>
	)
}

export default HeaderSearch
