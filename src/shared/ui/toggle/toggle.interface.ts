import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface IToggle
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string
}
