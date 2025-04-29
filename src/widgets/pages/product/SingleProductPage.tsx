'use client'
import React, { useState } from 'react'
import styles from './SingleProductPage.module.scss'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { productService } from '@/api/products/product.service'
import Nav from '@/features/nav/Nav'
import Loader from '@/shared/ui/components/loader/Loader'
import SingleProductImage from '@/widgets/pages/product/image/SingleProductImage'
import ProductColumnTitle from '@/widgets/pages/product/title/ProductColumnTitle'
import { ProductContext } from '@/shared/contexts/productContext'
import ProductCharacteristics from '@/widgets/pages/product/characteristics/ProductCharacteristics'
import ProductReviews from '@/widgets/pages/product/reviews/ProductReviews'
import SingleProductMobileImage from '@/widgets/pages/product/image/mobile/SingleProductMobileImage'

const SingleProductPage = () => {
	const { id } = useParams<{ id: string }>()
	const { data, isLoading } = useQuery({
		queryKey: ['product'],
		queryFn: () => productService.findProductById(id)
	})
	const product = data?.data?.findProductById
	const [memory, setMemory] = useState<number>(0)
	const [color, setColor] = useState<string>('')

	return (
		<div className={styles.page}>
			<div className="container">
				{/* Loader */}
				{product && !isLoading ? (
					<>
						<Nav
							links={[
								{
									href: `products/${product.category.id}`,
									title: product.category.title
								},
								{
									href: `product/${product.id}`,
									title: `${product.brand.title} ${product.title}`
								}
							]}
						/>
					</>
				) : (
					<Loader />
				)}
				<div className={styles.product__container}>
					{product && (
						<>
							<div>
								<ProductContext.Provider
									value={{ color, setColor, memory, setMemory }}
								>
									<div className={styles.desktop}>
										<div className={styles.product__container_image_block}>
											<SingleProductImage product={data} />
											<ProductCharacteristics product={product} />
										</div>
										<ProductColumnTitle product={product} />
									</div>
									<div className={styles.mobile}>
										<SingleProductMobileImage product={data} />
										<ProductColumnTitle product={product} />
										<div className={styles.product__container_image_block}>
											<ProductCharacteristics product={product} />
										</div>
									</div>
								</ProductContext.Provider>
							</div>
							<ProductReviews product={product} />
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default SingleProductPage
