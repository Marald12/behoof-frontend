import React, { FC, useContext } from 'react'
import styles from './QuestionQuestions.module.scss'
import { IApi } from '@/api/api.type'
import { GetProfileQuery } from '@/shared/types/graphql'
import { FaCaretLeft } from 'react-icons/fa'
import { QuestionContext } from '@/shared/contexts/questionContext'
import dayjs from 'dayjs'

const QuestionQuestions: FC<{
	query: IApi<GetProfileQuery> | undefined
}> = ({ query }) => {
	const { setValue } = useContext(QuestionContext)

	return (
		<div className={styles.questions}>
			<div className={styles.questions__title}>
				<button onClick={() => setValue('default')}>
					<FaCaretLeft size={28} color='#FF4D4D' />
				</button>
				<h4>Мои вопросы</h4>
			</div>
			<div className={styles.questions__content}>
				{query?.data?.getProfile.questions?.map(item => (
					<div key={item.id}>
						<span className={styles.question__title}>{item.question}</span>
						<span className={styles.question__date}>
							{dayjs(item.createdAt).format('DD.MM.YYYY hh:mm')}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default QuestionQuestions
