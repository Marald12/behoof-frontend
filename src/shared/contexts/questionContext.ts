import { createContext, Dispatch, SetStateAction } from 'react'

interface IQuestionsContext {
	value: string
	setValue: Dispatch<SetStateAction<string>>
}

export const QuestionContext = createContext<IQuestionsContext>({
	value: '',
	setValue: () => {}
})
