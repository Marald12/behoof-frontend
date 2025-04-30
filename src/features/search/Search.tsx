import React, { FC, useEffect } from 'react'
import styles from './Search.module.scss'
import cn from 'classnames'
import { ISearchProps } from '@/features/search/search.interface'
import useDebounce from '@/shared/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { productService } from '@/api/products/product.service'
import Loader from '@/shared/ui/components/loader/Loader'
import SearchItem from '@/features/search/product-item/SearchItem'
import { articleService } from '@/api/article/article.service'
import SearchArticleItem from '@/features/search/article-item/SearchArticleItem'
import Link from 'next/link'
import { IoClose } from 'react-icons/io5'

const Search: FC<ISearchProps> = ({ isShow, ref, setIsShow, value }) => {
	const debouncedValue = useDebounce<string>(value, 200)
	const { data, isLoading } = useQuery({
		queryKey: ['searchProduct', debouncedValue],
		queryFn: () => productService.searchProducts(debouncedValue),
		enabled: !!debouncedValue.trim()
	})
	const { data: reviewsData, isLoading: reviewsIsLoading } = useQuery({
		queryKey: ['reviewsSearch'],
		queryFn: () => articleService.findAll({ take: 2 })
	})

	useEffect(() => {
		if (isShow) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}

		return () => {
			document.body.classList.remove('no-scroll')
		}
	}, [isShow])

	return (
		<div className={cn(styles.search, isShow && styles.show)}>
			<div className={styles.search__window} ref={ref}>
				<button className={styles.search__window_close} onClick={() => setIsShow(false)}>
					<IoClose size={32} />
				</button>
				<div className="container">
					<div className={styles.search__window_items}>
						{isLoading && <Loader />}
						{!debouncedValue && <Loader />}
						{data && data.data?.searchProducts.map((product) => <SearchItem
							setShow={setIsShow}
							product={product}
							key={product.id} />)}
						{data?.data?.searchProducts.length === 0 &&
							<h4 className={styles.search__window_items_not_found}>Ничего не найдено</h4>}
					</div>
					<div className={styles.search__window_footer}>
						<div className={styles.search__window_footer_reviews}>
							<h4>Обзоры</h4>
							{reviewsIsLoading && <Loader />}
							{reviewsData && reviewsData.data?.findAllArticles.map(item => <SearchArticleItem key={item.id}
																																															 item={item} />)}
						</div>
						<div className={styles.search__window_footer_often_searched}>
							<h4>Часто ищут</h4>
							<Link href="/products/0462aae1-f827-47a4-9478-554656e894a6">Планшеты</Link>
							<Link href="/products/925dbf93-713b-4ae7-8f63-5bb627ac99a0">Смарфтоны</Link>
							<Link href="/product/c5f9b091-4988-45d9-96ed-edeacef0c92c">iPhone 14 Pro Max</Link>
							<Link
								href="/products/925dbf93-713b-4ae7-8f63-5bb627ac99a0?brand=50a65ab4-61f8-4a57-8204-5f83db59a8cc">
								Apple
							</Link>
							<Link
								href="/products/925dbf93-713b-4ae7-8f63-5bb627ac99a0?brand=15360c34-8132-4100-8b13-3cf0d4f507a6">
								Xiaomi
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search