import React, { FC } from 'react'
import styles from './Nav.module.scss'
import { INav } from '@/features/nav/nav.interface'
import cn from 'classnames'
import Link from 'next/link'

const Nav: FC<INav> = ({ className, links, ...props }) => {
	return (
		<nav className={cn(styles.nav, className)} {...props}>
			<Link href='/'>Главная</Link>
			{links.map(item => (
				<Link href={'/' + item.href} key={`${item.title}-${item.href}`}>
					{item.title}
				</Link>
			))}
		</nav>
	)
}

export default Nav
