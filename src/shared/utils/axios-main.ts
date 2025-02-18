import axios from 'axios'
import { baseUrl } from '@/shared/utils/baseUrl'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export const axiosMain = (cookiesHeader?: RequestCookie) =>
	axios.create({
		baseURL: baseUrl,
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
			Cookie: `${cookiesHeader?.name}=${cookiesHeader?.value}`
		}
	})
