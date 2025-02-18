import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface INav
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	links: {
		href: string
		title: string
	}[]
}
