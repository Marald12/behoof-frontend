import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './SingleProductImage.module.scss'
import { IProductProps } from '@/shared/types/product.type'
import Image from 'next/image'
import Loader from '@/shared/ui/components/loader/Loader'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const SingleProductImage: FC<IProductProps> = ({ product }) => {
	const productImages = product?.data?.findProductById.images
	const [activeImage, setActiveImage] = useState<number>(0)
	const [images, setImages] = useState<(string | undefined)[]>([])
	const ref = useRef<HTMLImageElement>(null)
	const ref2 = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (productImages) {
			setImages(productImages.filter((_, i) => i !== activeImage))
		}
	}, [activeImage, productImages])

	const clickLeftHandler = () => {
		if (ref.current) {
			ref.current.style.opacity = '0'
			setTimeout(() => {
				setActiveImage(prev => (prev <= 0 ? prev : prev - 1))
				ref.current.style.opacity = '1'
			}, 400)
		}
		if (ref2.current) {
			ref2.current.style.opacity = '0'

			setTimeout(() => {
				ref2.current.style.opacity = '1'
			}, 400)
		}
	}

	const clickRightHandler = () => {
		if (ref.current) {
			ref.current.style.opacity = '0'

			setTimeout(() => {
				setActiveImage(prev =>
					prev >= productImages?.length - 1 ? prev : prev + 1
				)
				ref.current.style.opacity = '1'
			}, 400)
		}
		if (ref2.current) {
			ref2.current.style.opacity = '0'

			setTimeout(() => {
				ref2.current.style.opacity = '1'
			}, 400)
		}
	}

	return productImages ? (
		<div className={styles.image}>
			<div className={styles.image__big}>
				<button onClick={clickLeftHandler}>
					<IoIosArrowBack color="#0F1113" size={21} />
				</button>
				<Image
					ref={ref}
					src={productImages[activeImage]}
					alt={productImages[activeImage]}
					width={350}
					height={410}
				/>
				<button onClick={clickRightHandler}>
					<IoIosArrowForward color="#0F1113" size={21} />
				</button>
			</div>
			<div className={styles.image__small_images} ref={ref2}>
				{images.map(img => (
					<div key={img}>
						<Image src={img!} alt={img!} width={170} height={222} />
					</div>
				))}
			</div>
		</div>
	) : (
		<Loader />
	)
}

export default SingleProductImage
