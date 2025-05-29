import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '@/features/redux/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector