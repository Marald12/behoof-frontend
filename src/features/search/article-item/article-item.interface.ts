export interface IArticleItemProps {
	item: {
		__typename?: 'Article'
		id: string
		title: string
		banner: string
	}
	key?: any
}