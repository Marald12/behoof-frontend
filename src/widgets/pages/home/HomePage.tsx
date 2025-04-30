import React from 'react'
import styles from './HomePage.module.scss'
import { NextPage } from 'next'
import cn from 'classnames'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import { MdKeyboardArrowRight } from 'react-icons/md'
import patternImage from '@/assets/images/Patterns.png'
import iphone13Image from '@/assets/images/iphone-13.png'
import Link from 'next/link'
import Image from 'next/image'
import HomePageCategories from '@/widgets/pages/home/categories/HomePageCategories'

const HomePage: NextPage = () => {


	return (
		<div className={styles.page}>
			<section className={cn(styles.section__one, 'container')}>
				<div className={styles.section__one_category} style={{ backgroundImage: `url(${patternImage.src})` }}>
					<h2>
						<span>1.8 млн</span> товаров в <span>2272</span> магазинах найди, сравни, выберай!
					</h2>
					<Link href="/categories">
						<ButtonMain>Перейти к категориям <MdKeyboardArrowRight color="#fff" size={21} /></ButtonMain>
					</Link>
				</div>
				<div className={styles.section__one_top} style={{ backgroundImage: `url(${patternImage.src})` }}>
					<h2>
						<span>Топ-10 </span>
						смартфонов 2023 года
					</h2>
					<Link href="/article/123">
						<ButtonMain>Смотреть <MdKeyboardArrowRight color="#fff" size={21} /></ButtonMain>
					</Link>
					<Image src={iphone13Image} alt="iphone13" width={199} height={387} />
				</div>
			</section>
			<section className={styles.section__two}>
				<div className="container">
					<HomePageCategories />
				</div>
			</section>
		</div>
	)
}

export default HomePage