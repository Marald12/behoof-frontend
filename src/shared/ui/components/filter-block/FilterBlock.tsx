import React, { FC, useState } from 'react'
import './FilterBlock.styles.scss'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { IFilterBlockProps } from '@/shared/ui/components/filter-block/filter-block.interface'

const FilterBlock: FC<IFilterBlockProps> = ({ children, title }) => {
	const [isHidden, setIsHidden] = useState(true)

	return (
		<div className={'filter'}>
			<div className={'filter__header'}>
				<h4>{title}</h4>
				<div>
					{isHidden ? (
						<TiArrowSortedUp
							size={20}
							color='#2B3A4E'
							onClick={() => setIsHidden(prev => !prev)}
						/>
					) : (
						<TiArrowSortedDown
							size={20}
							color='#2B3A4E'
							onClick={() => setIsHidden(prev => !prev)}
						/>
					)}
				</div>
			</div>
			{isHidden && <>{children}</>}
		</div>
	)
}

export default FilterBlock
