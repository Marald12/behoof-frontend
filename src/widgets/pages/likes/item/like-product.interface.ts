export type ILikeProductProps = {
	item: {
		__typename?: 'Product'
		id: string
		title: string
		price: number
		images?: string[] | null
		characteristics: any
		category: {
			__typename?: 'Category'
			id: string
			title: string
		}
		colors?: {
			__typename?: 'Color'
			title
		}
		brand: {
			__typename?: 'Brand'
			title: string
		}
	}
	key: any
}