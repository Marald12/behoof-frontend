'use client'
import React, { FC } from 'react'
import ButtonIcon from '@/shared/ui/buttons/icon/ButtonIcon'
import { FaRegUser } from 'react-icons/fa'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'

const ProfileLink: FC = () => {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.fetchProfile()
	})

	if (data) {
		if (data.errors?.length > 0)
			return (
				<Link href='/login'>
					<ButtonIcon>
						<FaRegUser size={24} color='#263141' />
					</ButtonIcon>
				</Link>
			)
	}

	return (
		<Link href='/profile'>
			<ButtonIcon>
				<FaRegUser size={24} color='#263141' />
			</ButtonIcon>
		</Link>
	)
}

export default ProfileLink
