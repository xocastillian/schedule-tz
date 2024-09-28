import { observer } from 'mobx-react-lite'
import { Modal, Box } from '@mui/material'
import ScheduleModalHeader from '../../ScheduleModalHeader/ui/ScheduleModalHeader'
import Weekdays from '../../Weekdays/ui/Weekdays'
import SelectItem from '../../SelectItem/ui/SelectItem'
import HoursCounter from '../../HoursCounter/ui/HoursCounter'
import CustomDateTimePicker from '../../DateTimePicker/ui/DateTimePicker'
import ScheduleModalFooter from '../../ScheduleModalFooter/ui/ScheduleModalFooter'
import { content, counters, mainBox, pickers, selectors } from './ScheduleModal.mui'
import {
	auditoriumSelectItems,
	breakTimeSelectItems,
	groupSelectItems,
	hourTypeSelectItems,
	mentorSelectItems,
	schoolSelectItems,
} from '../constants'
import Warning from '../../Warning/ui/Warning'
import { FC, useCallback } from 'react'
import { HourType } from '../../../types'
import { useStores } from '../../../contexts/useStore'

interface ScheduleModalProps {
	open: boolean
	onClose: () => void
}

const ScheduleModal: FC<ScheduleModalProps> = observer(({ open, onClose }) => {
	const {
		dateTimePickerStore,
		dailyHoursCounter,
		totalHoursCounter,
		weekdaysStore,
		hourTypeSelect,
		breakTimeSelect,
		mentorSelect,
		auditoriumSelect,
		schoolSelect,
		groupSelect,
	} = useStores()

	const handleHourTypeChange = useCallback(
		(value: string) => {
			hourTypeSelect.setValue(value)
			dateTimePickerStore.setHourType(value as HourType)
			dateTimePickerStore.updateEndTime(dailyHoursCounter.count)
		},
		[dateTimePickerStore, hourTypeSelect, dailyHoursCounter]
	)

	const handleBreakTimeChange = useCallback(
		(value: string) => {
			breakTimeSelect.setValue(value)
			dateTimePickerStore.setBreakTime(value)
			dailyHoursCounter.updateEndTime()
		},
		[dailyHoursCounter, dateTimePickerStore, breakTimeSelect]
	)

	const handleMentorChange = useCallback(
		(value: string) => {
			mentorSelect.setValue(value)
		},
		[mentorSelect]
	)

	const handleAuditoriumChange = useCallback(
		(value: string) => {
			auditoriumSelect.setValue(value)
		},
		[auditoriumSelect]
	)

	const handleTotalHoursIncrement = useCallback(() => {
		totalHoursCounter.increment()
	}, [totalHoursCounter])

	const handleTotalHoursDecrement = useCallback(() => {
		if (totalHoursCounter.count > dailyHoursCounter.count) {
			totalHoursCounter.decrement()
		}
	}, [totalHoursCounter, dailyHoursCounter])

	const handleDailyHoursIncrement = useCallback(() => {
		dailyHoursCounter.increment()
		if (dailyHoursCounter.count > totalHoursCounter.count) {
			totalHoursCounter.setCount(dailyHoursCounter.count)
		}
		dailyHoursCounter.updateEndTime()
	}, [dailyHoursCounter, totalHoursCounter])

	const handleDailyHoursDecrement = useCallback(() => {
		dailyHoursCounter.decrement()
		dailyHoursCounter.updateEndTime()
	}, [dailyHoursCounter])

	const handleSchoolChange = useCallback(
		(value: string) => {
			schoolSelect.setValue(value)
		},
		[schoolSelect]
	)

	const handleGroupChange = useCallback(
		(value: string) => {
			groupSelect.setValue(value)
		},
		[groupSelect]
	)

	const handleAddSchedule = useCallback(() => {
		console.log('Adding schedule...')
		onClose()
	}, [onClose])

	return (
		<Modal open={open} onClose={onClose} aria-labelledby='modal-title' aria-describedby='modal-description'>
			<Box sx={mainBox}>
				<ScheduleModalHeader title='Редактирование расписания' onClose={onClose} />

				<Box sx={content}>
					<Box sx={selectors}>
						<SelectItem value={schoolSelect.selectedValue} menuItems={schoolSelectItems} onChange={handleSchoolChange} />
						<SelectItem value={groupSelect.selectedValue} menuItems={groupSelectItems} onChange={handleGroupChange} />
					</Box>

					<Weekdays store={weekdaysStore} />

					<Box sx={selectors}>
						<SelectItem value={hourTypeSelect.selectedValue} menuItems={hourTypeSelectItems} onChange={handleHourTypeChange} />
						<SelectItem value={breakTimeSelect.selectedValue} menuItems={breakTimeSelectItems} onChange={handleBreakTimeChange} />
					</Box>

					<Box sx={counters}>
						<HoursCounter
							title='Всего часов'
							count={totalHoursCounter.count}
							increment={handleTotalHoursIncrement}
							decrement={handleTotalHoursDecrement}
							disableDecrement={totalHoursCounter.count <= dailyHoursCounter.count}
						/>
						<HoursCounter
							title='Часов в день'
							count={dailyHoursCounter.count}
							increment={handleDailyHoursIncrement}
							decrement={handleDailyHoursDecrement}
						/>
					</Box>

					<Box sx={pickers}>
						<CustomDateTimePicker label='Период обучения' store={dateTimePickerStore} />
						<CustomDateTimePicker label='Время занятий' showTime store={dateTimePickerStore} />
					</Box>

					<Box sx={selectors}>
						<SelectItem value={mentorSelect.selectedValue} menuItems={mentorSelectItems} onChange={handleMentorChange} />
						<SelectItem value={auditoriumSelect.selectedValue} menuItems={auditoriumSelectItems} onChange={handleAuditoriumChange} />
					</Box>

					<Warning title='Выбор преподавателя и аудитории необязателен' />
				</Box>
				<ScheduleModalFooter onClose={onClose} onAdd={handleAddSchedule} />
			</Box>
		</Modal>
	)
})

export default ScheduleModal
