import React, { FC, useState } from 'react'
import FilterBlock from '@/shared/ui/components/filter-block/FilterBlock'
import { IProductCategoryInterfaceProps } from '@/widgets/pages/products/category/product-category.interface'
import cn from 'classnames'

const ProductCategoryDisplay: FC<IProductCategoryInterfaceProps> = ({
	setFilterDto,
	filterDto
}) => {
	const array = Array.from({ length: 5 }, (_, i) => i + 1)
	const [tempDisplayCount, setTempDisplayCount] = useState(0)

	return (
		<FilterBlock title='Экран'>
			<div className='filter__rating'>
				<span>Состояние</span>
				<div className={'filter__rating_blocks'}>
					{array.map(i => (
						<div
							className={cn(
								'filter__rating_blocks_block',
								tempDisplayCount >= i && 'active',
								filterDto.screen! >= i && 'active'
							)}
							key={`display-${i}`}
							onMouseEnter={() => setTempDisplayCount(i)}
							onMouseLeave={() => setTempDisplayCount(0)}
							onClick={() =>
								setFilterDto(prev => ({
									...prev,
									screen: prev.screen === i ? 0 : i
								}))
							}
						/>
					))}
				</div>
			</div>
		</FilterBlock>
	)
}

export default ProductCategoryDisplay
