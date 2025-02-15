import React, { forwardRef } from 'react'
import { IInput } from '@/shared/ui/inputs/input.interface'
import cn from 'classnames'
import styles from './InputGray.module.scss'

const InputGray = forwardRef<HTMLInputElement, IInput>(
	({ className, ...props }, ref) => {
		return (
			<input {...props} ref={ref} className={cn(className, styles.input)} />
		)
	}
)

export default InputGray
