import { forwardRef } from 'react'
import styles from './ButtonWhite.module.scss'
import { IButton } from '@/shared/ui/buttons/button.interface'
import cn from 'classnames'

const ButtonWhite = forwardRef<HTMLButtonElement, IButton>(
	({ className, ...props }, ref) => {
		return (
			<button
				{...props}
				ref={ref}
				className={cn(styles.button, className)}
			></button>
		)
	}
)

export default ButtonWhite
