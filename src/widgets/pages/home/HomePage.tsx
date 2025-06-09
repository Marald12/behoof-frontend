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
import googlePlayImage from '@/assets/images/google-play.png'
import appStore from '@/assets/images/app-store.png'
import iphoneOne from '@/assets/images/iPhone 14 Pro Space Black Mockup-1.png'
import iphoneTwo from '@/assets/images/iPhone 14 Pro Space Black Mockup.png'
import HomePagePopularProducts from '@/widgets/pages/home/popular-products/HomePagePopularProducts'
import HomePageArticles from '@/widgets/pages/home/articles/HomePageArticles'

const HomePage: NextPage = () => {
	return (
		<div className={styles.page}>
			<section className={cn(styles.section__one, 'container')}>
				<div
					className={styles.section__one_category}
					style={{ backgroundImage: `url(${patternImage.src})` }}
				>
					<h2>
						<span>1.8 млн</span> товаров в <span>2272</span> магазинах найди,
						сравни, выберай!
					</h2>
					<div>
						<Link href='/categories'>
							<ButtonMain>
								Перейти к категориям{' '}
								<MdKeyboardArrowRight color='#fff' size={21} />
							</ButtonMain>
						</Link>
					</div>
				</div>
				<div
					className={styles.section__one_top}
					style={{ backgroundImage: `url(${patternImage.src})` }}
				>
					<h2>
						<span>Смотреть </span>
						все статьи на сайте
					</h2>
					<div>
						<Link href='/articles'>
							<ButtonMain>
								Смотреть <MdKeyboardArrowRight color='#fff' size={21} />
							</ButtonMain>
						</Link>
					</div>
					<Image src={iphone13Image} alt='iphone13' width={199} height={387} />
				</div>
			</section>
			<section className={styles.section__two}>
				<div className='container'>
					<HomePageCategories />
				</div>
			</section>
			<section className={styles.section__three}>
				<div className='container'>
					<span>
						Наша цель - создать фантастический <br />
						сервис для всех потребителей
					</span>
					<div className={styles.section__three_columns}>
						<div>
							<h3>5</h3>
							<span>
								Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a
								pharetra viverra enim nunc.
							</span>
						</div>
						<div>
							<h3>30</h3>
							<span>
								Gravida vel convallis id aliquet volutpat nullam dignissim. Amet
								parturient elementum lectus rhoncus at.
							</span>
						</div>
						<div>
							<h3>300</h3>
							<span>
								Sed varius ut venenatis id amet et consectetur pellentesque.
								Vitae urna ornare vel suspendisse tincidunt.{' '}
							</span>
						</div>
						<div>
							<h3>8</h3>
							<span>
								Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing
								feugiat quis convallis velit.{' '}
							</span>
						</div>
					</div>
					<div
						className={styles.section__three_block}
						style={{ backgroundImage: `url(${patternImage.src})` }}
					>
						<div className={styles.section__three_block_title}>
							<h3>
								<span>Экономьте</span> свое время и получайте{' '}
								<span>максимум</span> от ежедневных покупок
							</h3>
							<div>
								<Image
									src={googlePlayImage.src}
									alt='google play store'
									width={164}
									height={51}
								/>
								<Image
									src={appStore.src}
									alt='app store'
									width={164}
									height={51}
								/>
							</div>
						</div>
						<div className={styles.section__three_block_image}>
							<Image
								src={iphoneOne.src}
								alt='Iphone one'
								width={295}
								height={598}
								style={{ objectFit: 'contain' }}
							/>
							<Image
								src={iphoneTwo.src}
								alt='Iphone two'
								width={295}
								height={598}
								style={{ objectFit: 'contain' }}
							/>
						</div>
					</div>
				</div>
			</section>
			<HomePagePopularProducts />
			<HomePageArticles />
		</div>
	)
}

export default HomePage
