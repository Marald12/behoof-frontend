import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/features/redux/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()