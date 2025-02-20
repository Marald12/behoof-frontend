import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

export interface ITextArea
	extends DetailedHTMLProps<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	label?: string
}
