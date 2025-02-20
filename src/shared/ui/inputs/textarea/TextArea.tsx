import React, { FC, forwardRef } from 'react'
import { ITextArea } from '@/shared/ui/inputs/textarea/textarea.interface'
import cn from 'classnames'
import styles from './TextArea.module.scss'

const TextArea: FC = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ label, className, ...props }, ref) => {
		if (label)
			return (
				<div className={styles.wrapper}>
					<label>{label}</label>
					<textarea
						ref={ref}
						className={cn(styles.textarea, className)}
						{...props}
					/>
				</div>
			)

		return (
			<textarea
				ref={ref}
				className={cn(styles.textarea, className)}
				{...props}
			/>
		)
	}
)

export default TextArea
