import React from 'react'
import styles from './ProfileColumns.module.scss'
import ProfileColumnSettings from '@/widgets/pages/profile/ui/columns/settings/ProfileColumnSettings'
import ProfileColumnQuestion from '@/widgets/pages/profile/ui/columns/question/ProfileColumnQuestion'
import ProfileColumnAccount from '@/widgets/pages/profile/ui/columns/account/ProfileColumnAccount'

const ProfileColumns = () => {
	return (
		<section className={styles.columns}>
			<ProfileColumnSettings />
			<ProfileColumnQuestion />
			<ProfileColumnAccount />
		</section>
	)
}

export default ProfileColumns
