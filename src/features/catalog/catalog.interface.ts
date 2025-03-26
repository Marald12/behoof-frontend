import { Dispatch, LegacyRef, SetStateAction } from 'react'

export interface ICatalogProps {
	setIsShow: Dispatch<SetStateAction<boolean>>
	isShow: boolean
	ref: LegacyRef<HTMLDivElement> | undefined
}
