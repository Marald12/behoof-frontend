'use client'

import {
	HydrationBoundary,
	HydrationBoundaryProps
} from '@tanstack/react-query'

export default function Hydrate({ children, state }: HydrationBoundaryProps) {
	return <HydrationBoundary state={state}>{children}</HydrationBoundary>
}
