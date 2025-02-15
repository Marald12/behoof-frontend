import React, { FC } from 'react'
import styles from './Footer.module.scss'
import Logo from '@/shared/ui/components/logo/Logo'
import Link from 'next/link'
import { FaVk } from 'react-icons/fa6'
import { AiFillTikTok } from 'react-icons/ai'
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.column__logo}>
					<Logo />
					<div className={styles.column__logo_span}>
						<span>Мы в соц сетях</span>
					</div>
					<div className={styles.column__logo_links}>
						<Link href='' target='_blank'>
							<FaVk size={20} />
						</Link>
						<Link href='' target='_blank'>
							<AiFillTikTok size={20} />
						</Link>
						<Link href='' target='_blank'>
							<FaInstagram size={20} />
						</Link>
						<Link href='' target='_blank'>
							<FaTelegramPlane size={20} />
						</Link>
						<Link href='' target='_blank'>
							<FaYoutube size={20} />
						</Link>
					</div>
				</div>
				<div className={styles.column}>
					<span>Пользователю</span>
					<Link href=''>Связаться с нами</Link>
					<Link href=''>Поддерка пользователей</Link>
					<Link href=''>FAQ & Руководства</Link>
					<Link href=''>Политика конфиденциальности</Link>
					<Link href=''>Пользовательское соглашение</Link>
				</div>
				<div className={styles.column}>
					<span>Популярные категории</span>
					<Link href=''>Смартфоны</Link>
					<Link href=''>Teteras electricas</Link>
					<Link href=''>Стиральные машины</Link>
					<Link href=''>Телевизоры</Link>
					<Link href=''>Ноутбуки</Link>
				</div>
				<div className={styles.column}>
					<span>Команда Behoof</span>
					<Link href=''>О нас</Link>
					<Link href=''>Робота у нас</Link>
				</div>
			</div>
			<div className={styles.copyright}>
				<span>Copyright © 2023 Behoof, Inc. Все права защищены</span>
			</div>
		</footer>
	)
}

export default Footer
