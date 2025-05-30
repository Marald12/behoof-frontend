export interface IArticleItemProps {
	article: {
		__typename?: 'Article'
		id: string
		title: string
		banner: string
		tags?: string[] | null
		createdAt: any
	}
	key?: any
}