import React, { FC, useState } from 'react'
import styles from './Toggle.module.scss'
import { IToggle } from '@/shared/ui/toggle/toggle.interface'
import cn from 'classnames'

const Toggle: FC<IToggle> = ({ label, labelIsRight, ...props }) => {
	const [checked, setChecked] = useState(false)

	if (label) {
		return (
			<div className={styles.wrapper}>
				{!labelIsRight && (
					<span className={cn(checked && styles.active)}>{label}</span>
				)}
				<label className={styles.toggle}>
					<input
						type="checkbox"
						checked={checked}
						onChange={e => setChecked(e.target.checked)}
						{...props}
					/>
					<span></span>
				</label>
				{labelIsRight && (
					<span className={cn(checked && styles.active)}>{label}</span>
				)}
			</div>
		)
	}

	return (
		<label className={styles.toggle}>
			<input type="checkbox" {...props} />
			<span></span>
		</label>
	)
}

export default Toggle
