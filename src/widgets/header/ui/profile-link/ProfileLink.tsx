import React, { FC } from 'react'
import ButtonIcon from '@/shared/ui/buttons/icon/ButtonIcon'
import { FaRegUser } from 'react-icons/fa'
import Link from 'next/link'

const ProfileLink: FC = () => {
	return (
		<Link href='/profile'>
			<ButtonIcon>
				<FaRegUser size={24} color='#263141' />
			</ButtonIcon>
		</Link>
	)
}

export default ProfileLink
