export interface IReviewItemProps {
	key?: any
	review: {
		__typename?: 'Review'
		id: string
		message: string
		starsCount: number
		createdAt: any
		user: {
			__typename?: 'User'
			name: string
		}
	}
}