'use client'
import React, { useState } from 'react'
import styles from './PrivacyPolicy.module.scss'
import { NextPage } from 'next'
import Nav from '@/features/nav/Nav'
import cn from 'classnames'
import {
	contentArray,
	sidebarArray
} from '@/widgets/pages/privacy-policy/privacy-menu.array'

const PrivacyPolicy: NextPage = () => {
	const [currentId, setCurrentId] = useState<number>(1)

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<Nav
				links={[
					{ href: 'privacy-policy', title: 'Политика конфиденциальности' }
				]}
			/>
			<h3>Политика конфиденциальности</h3>
			<div className={styles.columns}>
				<aside className={styles.column__sidebar}>
					<h5>Оглавление</h5>
					{sidebarArray.map(item => (
						<span
							key={`item-dfdf-dfdf-${item.id}`}
							onClick={() => setCurrentId(item.id)}
							className={cn(currentId === item.id && styles.active)}
						>
							{item.title}
						</span>
					))}
				</aside>
				<div className={styles.column__content}>
					<h4>{sidebarArray.find(i => i.id === currentId)?.title}</h4>
					{contentArray
						.find(i => i.id === currentId)
						?.content.map(item =>
							item.type === 'text' ? (
								<div key={item.title}>
									<h5>{item.title}</h5>
									<p>{item.description}</p>
								</div>
							) : (
								<div key={item.title}>
									<h5>{item.title}</h5>
									<ul>
										{item.description.split('|').map((i, index) => (
											<li key={i}>
												<b>{index + 1}.</b>
												<span>{i}</span>
											</li>
										))}
									</ul>
								</div>
							)
						)}
				</div>
			</div>
		</div>
	)
}

export default PrivacyPolicy
