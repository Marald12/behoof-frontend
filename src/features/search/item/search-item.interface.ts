export interface ISearchItemProps {
	product: {
		__typename?: 'Product'
		id: string
		title: string
		images?: string[] | null
		price: number
		characteristics: any
		brand: {
			__typename?: 'Brand'
			title: string
		}
		category: {
			__typename?: 'Category'
			title: string
		}
		colors?: Array<{
			__typename?: 'Color'
			title: string
		}> | null
	}
	key: any
}