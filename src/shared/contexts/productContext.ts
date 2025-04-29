import { createContext, Dispatch, SetStateAction } from 'react'

interface IProductContext {
	color: string
	setColor: Dispatch<SetStateAction<string>>
	memory: number
	setMemory: Dispatch<SetStateAction<number>>
}

export const ProductContext = createContext<IProductContext>({
	color: '',
	setColor: () => {},
	memory: 0,
	setMemory: () => {}
})
