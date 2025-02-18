import { dehydrate, QueryClient } from '@tanstack/react-query'
import { cookies } from 'next/headers'
import { userService } from '@/api/user/user.service'

export const hydrateProfile = async () => {
	const queryClient = new QueryClient()

	const cookieStore = await cookies()
	const cookieHeader = cookieStore.get('session')

	await queryClient.prefetchQuery({
		queryKey: ['profile'],
		queryFn: () => userService.fetchProfile(cookieHeader)
	})

	return dehydrate(queryClient)
}
