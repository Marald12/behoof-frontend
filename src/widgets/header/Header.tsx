import React, { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import ButtonIcon from '@/shared/ui/buttons/icon/ButtonIcon'
import { GoHeart } from 'react-icons/go'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import ProfileLink from '@/widgets/header/ui/profile-link/ProfileLink'
import Logo from '@/shared/ui/components/logo/Logo'
import HeaderSearch from '@/widgets/header/ui/search/HeaderSearch'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__logo}>
					<Logo />
					<span>Лучшие цены в интернет-магазинах</span>
				</div>
				<HeaderSearch />
				<div className={styles.links}>
					<Link href=''>
						<ButtonIcon>
							<GoHeart size={24} color='#263141' />
						</ButtonIcon>
					</Link>
					<Link href=''>
						<ButtonIcon>
							<TbBrandGoogleAnalytics size={24} color='#263141' />
						</ButtonIcon>
					</Link>
					<ProfileLink />
				</div>
			</div>
		</header>
	)
}

export default Header
