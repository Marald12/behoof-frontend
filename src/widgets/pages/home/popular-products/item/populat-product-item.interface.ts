import { FindPopularProductsQuery } from '@/shared/types/graphql'

type Product = FindPopularProductsQuery['findPopularProducts'][0]

export interface IPopularProductItemProps {
	product: Product
	key?: any
}