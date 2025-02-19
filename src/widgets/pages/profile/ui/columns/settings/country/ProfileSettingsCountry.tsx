import React, { FC, useState } from 'react'
import styles from './ProfileSettingsCountry.module.scss'
import { PiCity } from 'react-icons/pi'
import Loader from '@/shared/ui/components/loader/Loader'
import { IoMdArrowDropright } from 'react-icons/io'
import Select from 'react-select'
import { countries } from '@/shared/utils/countries'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/api/user/user.service'
import { toast } from 'react-toastify'

const ProfileSettingsCountry: FC<{ country: string }> = ({ country }) => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationKey: ['profile'],
		mutationFn: (country: string) => userService.updateUser({ country }),
		onSuccess: async data => {
			if (data.data) {
				toast.success('Вы успешно изменили страну.')
				await queryClient.invalidateQueries({
					queryKey: ['profile']
				})
			}
		}
	})
	const [isOpen, setIsOpen] = useState(false)
	const countryOptions = countries.map(country => ({
		label: country.name,
		value: country.name
	}))

	const changeHandler = (value: string) => {
		setIsOpen(false)
		mutate(value)
	}

	return (
		<>
			<div className={styles.country} onClick={() => setIsOpen(prev => !prev)}>
				<div className={styles.country__title}>
					<PiCity color='#FF4D4D' size={20} />
					<span>{`Страна: ${!isPending ? (country === '' ? 'Отсутвует' : country) : ''}`}</span>
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

export default ProfileSettingsCountry
