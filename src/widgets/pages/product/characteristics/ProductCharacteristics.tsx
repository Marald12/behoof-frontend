import React, { FC, useContext, useState } from 'react'
import styles from './ProductCharacteristics.module.scss'
import { ProductContext } from '@/shared/contexts/productContext'
import { IProductNoApiProps } from '@/shared/types/product.type'
import { IoIosArrowDown } from 'react-icons/io'

const ProductCharacteristics: FC<IProductNoApiProps> = ({ product }) => {
	const { memory, color } = useContext(ProductContext)
	const [isShow, setIsShow] = useState(false)

	const ch = product?.characteristics

	return (
		<>
			<div className={styles.characteristics}>
				<h4>Характеристики {product?.brand.title} {product?.title} {memory} ГБ {color.toLowerCase()}</h4>
				<div className={styles.characteristics__mini}>
					<div>{ch.camera.russianTranslate} <b>{ch.camera.value} MPx</b></div>
					<div>{ch.os.russianTranslate} <b>{ch.os.value}</b></div>
					<div>{ch.screen.diagonal.russianTranslate} <b>{ch.screen.diagonal.value}"</b></div>
					<div>{ch.chargingType.russianTranslate} <b>{ch.chargingType.value}</b></div>
				</div>
				<span onClick={() => setIsShow(prev => !prev)}>
					Полный список характеристик <IoIosArrowDown color="#FF4D4D" size={19} />
				</span>

				{isShow && (
					<div className={styles.characteristics__share}>
						<h3>{ch.factoryData.russianTranslate}</h3>
						{Object.entries(ch.factoryData).map(([key, val]: any) =>
								key !== 'russianTranslate' && (
									<div key={key}>
										<span>{val.russianTranslate}</span>
										<strong>{val.value}</strong>
									</div>
								)
						)}

						<h3>{ch.screen.russianTranslate}</h3>
						{Object.entries(ch.screen).map(([key, val]: any) =>
								key !== 'russianTranslate' && (
									<div key={key}>
										<span>{val.russianTranslate}</span>
										<strong>{val.value}</strong>
									</div>
								)
						)}
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
