import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IFilterBlockProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string
}
