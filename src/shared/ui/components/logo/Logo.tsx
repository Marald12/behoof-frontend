import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/logo.svg'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href='/' className={styles.logo}>
			<Image src={logo} alt={logo} />
			<h4>Behoof</h4>
		</Link>
	)
}

export default Logo
