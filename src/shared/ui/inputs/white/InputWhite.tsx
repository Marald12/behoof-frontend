import React, { forwardRef, useId } from 'react'
import { IInput } from '@/shared/ui/inputs/input.interface'
import cn from 'classnames'
import styles from './InputWhite.module.scss'

const InputWhite = forwardRef<HTMLInputElement, IInput>(
	({ className, label, error, ...props }, ref) => {
		if (label || error) {
			const id = useId()

			return (
				<div className={styles.wrapper}>
					<label htmlFor={`white-input-${id}`}>{label}</label>
					<input
						{...props}
						id={`white-input-${id}`}
						ref={ref}
						className={cn(className, styles.input)}
					/>
					{error && <span>{error}</span>}
				</div>
			)
		}

		return (
			<input {...props} ref={ref} className={cn(className, styles.input)} />
		)
	}
)

export default InputWhite
