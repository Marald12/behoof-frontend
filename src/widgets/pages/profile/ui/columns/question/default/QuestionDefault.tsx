'use client'
import React, { FC, useContext } from 'react'
import styles from './QuestionDefault.module.scss'
import { RiUser2Line } from 'react-icons/ri'
import { IoMdArrowDropright } from 'react-icons/io'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import { IApi } from '@/api/api.type'
import { GetProfileQuery } from '@/shared/types/graphql'
import { QuestionContext } from '@/shared/contexts/questionContext'

const QuestionDefault: FC<{
	query: IApi<GetProfileQuery> | undefined
}> = ({ query }) => {
	const { setValue } = useContext(QuestionContext)

	return (
		<div className={styles.column}>
			<h4>Поддержка</h4>
			<div className={styles.questions} onClick={() => setValue('questions')}>
				<div className={styles.questions__title}>
					<RiUser2Line color='#FF4D4D' size={24} />
					<span>Ваши вопросы</span>
				</div>
				<div className={styles.questions__count}>
					<div className={styles.count}>
						{query?.data?.getProfile.questions?.length}
					</div>
					<button>
						<IoMdArrowDropright size={27} color='#aab0b5' />
					</button>
				</div>
			</div>
			<div className={styles.send__question}>
				<h5>Есть вопросы?</h5>
				<p>Напишите нам и мы вам с радостью поможем с любой проблемой.</p>
			</div>
			<ButtonMain onClick={() => setValue('send')}>
				Написать в поддержку
			</ButtonMain>
		</div>
	)
}

export default QuestionDefault
