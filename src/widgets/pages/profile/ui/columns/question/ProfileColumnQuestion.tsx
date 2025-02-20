'use client'
import React, { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import { QuestionContext } from '@/shared/contexts/questionContext'
import QuestionDefault from '@/widgets/pages/profile/ui/columns/question/default/QuestionDefault'
import QuestionQuestions from '@/widgets/pages/profile/ui/columns/question/questions/QuestionQuestions'
import QuestionSend from '@/widgets/pages/profile/ui/columns/question/send/QuestionSend'

const ProfileColumnQuestion: FC = () => {
	const [value, setValue] = useState('default')
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: async () => userService.fetchProfile()
	})

	return (
		<>
			{data?.data && (
				<QuestionContext.Provider value={{ value, setValue }}>
					{value === 'default' && <QuestionDefault query={data} />}
					{value === 'questions' && <QuestionQuestions query={data} />}
					{value === 'send' && <QuestionSend />}
				</QuestionContext.Provider>
			)}
		</>
	)
}

export default ProfileColumnQuestion
