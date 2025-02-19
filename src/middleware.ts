import { NextRequest, NextResponse } from 'next/server'
import { axiosMain } from '@/shared/utils/axios-main'
import { IApi } from '@/api/api.type'
import { GetProfileQuery } from '@/shared/types/graphql'
import { profileSchema } from '@/api/user/schemas/profile.schema'

export async function middleware(req: NextRequest) {
	const cookie = req.cookies.get('session')
	const res = await axiosMain(cookie).post<IApi<GetProfileQuery>>('', {
		query: profileSchema
	})
	const isAuth = !res.data.errors
	const path = req.nextUrl.pathname

	if (isAuth && path === '/login') {
		return NextResponse.redirect(new URL('/profile', req.url))
	}

	if (isAuth && path === '/register') {
		return NextResponse.redirect(new URL('/profile', req.url))
	}

	if (!isAuth && ['/profile'].some(route => path.startsWith(route))) {
		return NextResponse.redirect(new URL('/', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/profile', '/profile/:path*', '/login', '/register']
}
