import React, { FC, useState } from 'react'
import styles from './ProfileSettingsCity.module.scss'
import { PiCity } from 'react-icons/pi'
import Loader from '@/shared/ui/components/loader/Loader'
import { IoMdArrowDropright } from 'react-icons/io'
import Select from 'react-select'
import { countries } from '@/shared/utils/countries'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import { toast } from 'react-toastify'

const ProfileSettingsCity: FC<{ city: string; country: string }> = ({
	city,
	country
}) => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationKey: ['profile'],
		mutationFn: (city: string) => userService.updateUser({ city }),
		onSuccess: async data => {
			if (data.data) {
				toast.success('Вы успешно изменили город.')
				await queryClient.invalidateQueries({
					queryKey: ['profile']
				})
			}
		}
	})
	const [isOpen, setIsOpen] = useState(false)
	const countryOptions = countries
		.find(i => i.name === country)
		?.cities.map(item => ({ value: item, label: item }))

	const changeHandler = (value: string) => {
		setIsOpen(false)
		mutate(value)
	}

	return (
		<>
			<div className={styles.city} onClick={() => setIsOpen(prev => !prev)}>
				<div className={styles.city__title}>
					<PiCity color='#FF4D4D' size={20} />
					<span>{`Город: ${!isPending ? (city === '' ? 'Отсутвует' : city) : ''}`}</span>
					{isPending && (
						<div className={styles.loader}>
							<Loader />
						</div>
					)}
				</div>
				<button>
					<IoMdArrowDropright size={27} color='#aab0b5' />
				</button>
			</div>
			<Select
				options={countryOptions}
				menuIsOpen={isOpen}
				onChange={e => changeHandler(e!.value)}
				styles={{ control: () => ({ display: 'none' }) }}
			/>
		</>
	)
}

export default ProfileSettingsCity
