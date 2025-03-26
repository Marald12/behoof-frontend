import React, { FC } from 'react'
import styles from './ProductCategoryPrices.module.scss'
import RangeSlider from 'react-range-slider-input'
import { IProductCategoryInterfaceProps } from '@/widgets/pages/products/category/product-category.interface'

const ProductCategoryPrices: FC<IProductCategoryInterfaceProps> = ({
	filterDto,
	setFilterDto
}) => {
	const changeHandler = (e: number[]) => {
		setFilterDto(prev => ({
			...prev,
			minPrice: e[0],
			maxPrice: e[1]
		}))
	}

	return (
		<div className={styles.prices}>
			<h4>Диапазон цен</h4>
			<div className={styles.prices__price}>
				<span>
					От <b>{filterDto.minPrice!}</b>
				</span>
				<span>
					До <b>{filterDto.maxPrice!}</b>
				</span>
			</div>
			<RangeSlider
				min={0}
				max={100000}
				step={1}
				value={[filterDto.minPrice!, filterDto.maxPrice!]}
				onInput={changeHandler}
				className={styles.slider}
			/>
		</div>
	)
}

export default ProductCategoryPrices
