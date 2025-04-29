import React, { FC, useContext, useState } from 'react'
import styles from './ProductCharacteristics.module.scss'
import { ProductContext } from '@/shared/contexts/productContext'
import { IProductNoApiProps } from '@/shared/types/product.type'
import { IoIosArrowDown } from 'react-icons/io'

const ProductCharacteristics: FC<IProductNoApiProps> = ({ product }) => {
	const { memory, color } = useContext(ProductContext)
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<div className={styles.characteristics}>
				<h4>Характеристики {product?.brand.title} {product?.title} {memory} ГБ{' '}
					{color.toLocaleLowerCase()}</h4>
				<div className={styles.characteristics__mini}>
					<div>Камера <b>{product?.characteristics.camera} MPx</b></div>
					<div>Система <b>{product?.characteristics.os}</b></div>
					<div>Диагональ <b>{product?.characteristics.screen.diagonal}"</b></div>
					<div>Зарядка <b>{product?.characteristics.chargingType}</b></div>
				</div>
				<span onClick={() => setIsShow(prev => !prev)}>Полный список характеристик <IoIosArrowDown color="#FF4D4D"
																																																	 size={19} /></span>
				{isShow && (
					<div className={styles.characteristics__share}>
						<h3>Заводские данные</h3>
						<div>
							<span>Тип</span>
							<strong>{product?.characteristics.factoryData.type}</strong>
						</div>
						<div>
							<span>Модель</span>
							<strong>{product?.characteristics.factoryData.model}</strong>
						</div>
						<div>
							<span>Год релиза</span>
							<strong>{product?.characteristics.factoryData.year}</strong>
						</div>
						<h3>Экран</h3>
						<div>
							<span>Диагональ экрана (дюйм)</span>
							<strong>{product?.characteristics.screen.diagonal}"</strong>
						</div>
						<div>
							<span>Разрешение камеры</span>
							<strong>{product?.characteristics.screen.resolutionCamera} мг</strong>
						</div>
						<div>
							<span>Тип</span>
							<strong>{product?.characteristics.screen.type}</strong>
						</div>
						<div>
							<span>Плотность пикселей</span>
							<strong>{product?.characteristics.screen.densityScreen} ppi</strong>
						</div>
						<div>
							<span>Технология изготовления экрана</span>
							<strong>{product?.characteristics.screen.screenManufacturingTechnology}</strong>
						</div>
						<div>
							<span>Количество цветов экрана</span>
							<strong>{product?.characteristics.screen.countColorsSreen} млн</strong>
						</div>
						<div>
							<span>Конструктивные особенности экрана</span>
							<strong>{product?.characteristics.screen.designFeaturesOfTheScreen} млн</strong>
						</div>
						<h3>Заводские данные</h3>
						<div>
							<span>Тип</span>
							<strong>{product?.characteristics.factoryData.type}</strong>
						</div>
						<div>
							<span>Модель</span>
							<strong>{product?.characteristics.factoryData.model}</strong>
						</div>
						<div>
							<span>Год релиза</span>
							<strong>{product?.characteristics.factoryData.year}</strong>
						</div>
						<h3>Экран</h3>
						<div>
							<span>Диагональ экрана (дюйм)</span>
							<strong>{product?.characteristics.screen.diagonal}"</strong>
						</div>
						<div>
							<span>Разрешение камеры</span>
							<strong>{product?.characteristics.screen.resolutionCamera} мг</strong>
						</div>
						<div>
							<span>Тип</span>
							<strong>{product?.characteristics.screen.type}</strong>
						</div>
						<div>
							<span>Плотность пикселей</span>
							<strong>{product?.characteristics.screen.densityScreen} ppi</strong>
						</div>
						<div>
							<span>Технология изготовления экрана</span>
							<strong>{product?.characteristics.screen.screenManufacturingTechnology}</strong>
						</div>
						<div>
							<span>Количество цветов экрана</span>
							<strong>{product?.characteristics.screen.countColorsSreen} млн</strong>
						</div>
						<div>
							<span>Конструктивные особенности экрана</span>
							<strong>{product?.characteristics.screen.designFeaturesOfTheScreen} млн</strong>
						</div>
					</div>
				)}
			</div>
			<div className={styles.characteristics}>
				<h4>Описание</h4>
				<p>{product?.description}</p>
			</div>
		</>
	)
}

export default ProductCharacteristics
