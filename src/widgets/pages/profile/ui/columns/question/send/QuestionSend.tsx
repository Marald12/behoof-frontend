'use client'
import React, { FC, useContext, useState } from 'react'
import styles from './QuestionSend.module.scss'
import { QuestionContext } from '@/shared/contexts/questionContext'
import { FaCaretLeft } from 'react-icons/fa'
import ButtonMain from '@/shared/ui/buttons/main/ButtonMain'
import TextArea from '@/shared/ui/inputs/textarea/TextArea'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { questionService } from '@/api/question/question.service'
import { toast } from 'react-toastify'
import Loader from '@/shared/ui/components/loader/Loader'

const QuestionSend: FC = () => {
	const { setValue } = useContext(QuestionContext)
	const [question, setQuestion] = useState('')
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationKey: ['profile'],
		mutationFn: () => questionService.create(question),
		onSuccess: async data => {
			if (data.data) {
				await queryClient.invalidateQueries({
					queryKey: ['profile']
				})
				toast.success('Вопрос успешно создан.')
				setValue('default')
			}
		}
	})

	return (
		<div className={styles.send}>
			<div className={styles.send__title}>
				<button onClick={() => setValue('default')}>
					<FaCaretLeft size={28} color='#FF4D4D' />
				</button>
				<h4>Задать вопрос</h4>
			</div>
			<TextArea
				// @ts-ignore
				label='Введите вопрос'
				value={question}
				// @ts-ignore
				onChange={e => setQuestion(e.target.value)}
			/>
			<div className={styles.send__buttons}>
				<ButtonMain onClick={() => mutate()} disabled={isPending}>
					Отправить
				</ButtonMain>
				<div>{isPending && <Loader />}</div>
			</div>
		</div>
	)
}

export default QuestionSend
