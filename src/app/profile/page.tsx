import React from 'react'
import Nav from '@/features/nav/Nav'
import Hydrate from '@/shared/utils/hydrate/Hydrate'
import { hydrateProfile } from '@/shared/utils/hydrate-profile'
import ProfileUserName from '@/widgets/pages/profile/ui/user-name/ProfileUserName'

const ProfilePage = async () => {
	const dehydratedState = await hydrateProfile()

	return (
		<div className='container'>
			<Nav links={[{ href: 'profile', title: 'Профиль' }]} />
			<Hydrate state={dehydratedState}>
				<ProfileUserName />
			</Hydrate>
		</div>
	)
}

export default ProfilePage
