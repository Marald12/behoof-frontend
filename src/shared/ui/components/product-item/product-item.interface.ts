export interface IProductItem {
	__typename?: 'Product'
	id: string
	title: string
	description: string
	images?: Array<string> | null
	price: number
	rating: number
	characteristics: any
	brand: {
		title: string
	}
	reviews?: Array<{
		__typename?: 'Review'
		id: string
	}> | null
}
