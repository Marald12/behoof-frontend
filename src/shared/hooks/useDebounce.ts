import { useEffect, useState } from 'react'

function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(
		() => {
			const t = setTimeout(() => {
				setDebouncedValue(value)
			}, delay)

			return () => {
				clearTimeout(t)
			}
		},
		[value, delay]
	)
	return debouncedValue
}

export default useDebounce
