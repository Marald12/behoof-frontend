import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IFilterItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isActive?: boolean
}
