import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface IInput
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string
	error?: string
}
