import React, { FC } from 'react'
import styles from './ProfileColumnQuestion.module.scss'
import { IoMdArrowDropright } from 'react-icons/io'
import { RiUser2Line } from 'react-icons/ri'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'

const ProfileColumnQuestion: FC = () => {
	return (
		<div className={styles.column}>
			<h4>Поддержка</h4>
			<div className={styles.questions}>
				<div className={styles.questions__title}>
					<RiUser2Line color='#FF4D4D' size={24} />
					<span>Ваши вопросы</span>
				</div>
				<div className={styles.questions__count}>
					<div className={styles.count}>6</div>
					<button>
						<IoMdArrowDropright size={27} color='#aab0b5' />
					</button>
				</div>
			</div>
			<div className={styles.send__question}>
				<h5>Есть вопросы?</h5>
				<p>Напишите нам и мы вам с радостью поможем с любой проблемой.</p>
			</div>
			<ButtonMain>Написать в поддержку</ButtonMain>
		</div>
	)
}

export default ProfileColumnQuestion
