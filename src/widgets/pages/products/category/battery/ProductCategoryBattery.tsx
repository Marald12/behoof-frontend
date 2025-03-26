import React, { FC, useState } from 'react'
import cn from 'classnames'
import { IProductCategoryInterfaceProps } from '@/widgets/pages/products/category/product-category.interface'
import FilterItem from '@/shared/ui/components/filter-item/FilterItem'
import FilterBlock from '@/shared/ui/components/filter-block/FilterBlock'

const ProductCategoryBattery: FC<IProductCategoryInterfaceProps> = ({
	setFilterDto,
	filterDto
}) => {
	const [tempBatteryCount, setTempBatteryCount] = useState(0)
	const array = Array.from({ length: 5 }, (_, i) => i + 1)
	const arrayMemory = [16, 32, 64, 128, 256, 512]

	return (
		<FilterBlock title='Батарея'>
			<div className='filter__rating'>
				<div className={'filter__rating_blocks'}>
					{array.map(i => (
						<div
							className={cn(
								'filter__rating_blocks_block',
								tempBatteryCount >= i && 'active',
								filterDto.battery! >= i && 'active'
							)}
							key={`battery-${i}`}
							onMouseEnter={() => setTempBatteryCount(i)}
							onMouseLeave={() => setTempBatteryCount(0)}
							onClick={() =>
								setFilterDto(prev => ({
									...prev,
									battery: prev.battery === i ? 0 : i
								}))
							}
						/>
					))}
				</div>
			</div>
			<div className={'items'}>
				<span>Память</span>
				<div className={'items__items'}>
					{arrayMemory.map(i => (
						<FilterItem
							key={`memory-${i}`}
							isActive={i === filterDto.memory}
							onClick={() =>
								setFilterDto(prev => ({
									...prev,
									memory: i === filterDto.memory ? undefined : i
								}))
							}
						>
							{i}
						</FilterItem>
					))}
				</div>
			</div>
		</FilterBlock>
	)
}

export default ProductCategoryBattery
