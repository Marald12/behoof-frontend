'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'

const CheckToast = () => {
	const searchParams = useSearchParams()

	useEffect(() => {
		const error = searchParams.get('error')
		if (error === 'unauthorized') {
			toast.error('Вы не авторизованы!')
		}
	}, [searchParams])

	return null
}

export default CheckToast