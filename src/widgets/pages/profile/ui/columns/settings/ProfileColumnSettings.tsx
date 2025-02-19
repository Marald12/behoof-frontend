'use client'
import React, { FC } from 'react'
import styles from './ProfileColumnSettings.module.scss'
import Toggle from '@/shared/ui/toggle/Toggle'
import { useQuery } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import ProfileSettingsCountry from '@/widgets/pages/profile/ui/columns/settings/country/ProfileSettingsCountry'
import ProfileSettingsCity from '@/widgets/pages/profile/ui/columns/settings/city/ProfileSettingsCity'

const ProfileColumnSettings: FC = () => {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: async () => userService.fetchProfile()
	})

	return (
		<>
			{data?.data && (
				<div className={styles.column}>
					<h4>Настройки</h4>
					<div className={styles.column__triggers}>
						<Toggle label='Получать пуш уведомления' />
						<Toggle label='Получать уведомления на электронную почту' />
					</div>
					<div className={styles.column__country}>
						<ProfileSettingsCountry country={data.data.getProfile.country} />
						<ProfileSettingsCity
							city={data.data.getProfile.city}
							country={data.data!.getProfile.country}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default ProfileColumnSettings
