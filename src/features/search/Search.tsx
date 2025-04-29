import React, { FC } from 'react'
import styles from './Search.module.scss'
import cn from 'classnames'
import { ISearchProps } from '@/features/search/search.interface'
import useDebounce from '@/shared/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { productService } from '@/api/products/product.service'
import Loader from '@/shared/ui/components/loader/Loader'
import SearchItem from '@/features/search/item/SearchItem'

const Search: FC<ISearchProps> = ({ isShow, ref, value }) => {
	const debouncedValue = useDebounce<string>(value, 200)
	const { data, isLoading } = useQuery({
		queryKey: ['searchProduct', debouncedValue],
		queryFn: () => productService.searchProducts(debouncedValue),
		enabled: !!debouncedValue.trim()
	})

	return (
		<div className={cn(styles.search, isShow && styles.show)}>
			<div className={styles.search__window} ref={ref}>
				<div className="container">
					<div className={styles.search__window_items}>
						{isLoading && <Loader />}
						{!debouncedValue && <Loader />}
						{data && data.data?.searchProducts.map((product) => <SearchItem product={product} key={product.id} />)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search