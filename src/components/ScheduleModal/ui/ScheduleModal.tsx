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
import HoursCounterStore from '../../../stores/HoursCounterStore'
import SelectItemStore from '../../../stores/SelectItemStore'
import { useCallback } from 'react'
import { dateTimePickerStore } from '../../../stores/DateTimePickerStore'
import { HourType } from '../../../types'

interface ScheduleModalProps {
	open: boolean
	onClose: () => void
}

const dailyHoursCounter = new HoursCounterStore()
const totalHoursCounter = new HoursCounterStore()

const hourTypeSelect = new SelectItemStore('academic')
const breakTimeSelect = new SelectItemStore('5')
const auditoriumSelect = new SelectItemStore('auditorium_select')
const mentorSelect = new SelectItemStore('mentor_select')
const schoolSelect = new SelectItemStore('school_select')
const groupSelect = new SelectItemStore('group_select')

const ScheduleModal: React.FC<ScheduleModalProps> = observer(({ open, onClose }) => {
	const handleHourTypeChange = useCallback((value: string) => {
		hourTypeSelect.setValue(value)
		dateTimePickerStore.setHourType(value as HourType)
		dateTimePickerStore.updateEndTime(dailyHoursCounter.count)
	}, [])

	const handleBreakTimeChange = useCallback((value: string) => {
		breakTimeSelect.setValue(value)
		dateTimePickerStore.setBreakTime(value)
		dailyHoursCounter.updateEndTime()
	}, [])

	const handleMentorChange = useCallback((value: string) => {
		mentorSelect.setValue(value)
	}, [])

	const handleAuditoriumChange = useCallback((value: string) => {
		auditoriumSelect.setValue(value)
	}, [])

	const handleTotalHoursIncrement = () => {
		totalHoursCounter.increment()
	}

	const handleTotalHoursDecrement = () => {
		if (totalHoursCounter.count > dailyHoursCounter.count) {
			totalHoursCounter.decrement()
		}
	}

	const handleDailyHoursIncrement = () => {
		dailyHoursCounter.increment()
		if (dailyHoursCounter.count > totalHoursCounter.count) {
			totalHoursCounter.setCount(dailyHoursCounter.count)
		}
		dailyHoursCounter.updateEndTime()
	}

	const handleDailyHoursDecrement = () => {
		dailyHoursCounter.decrement()
		dailyHoursCounter.updateEndTime()
	}

	const handleSchoolChange = useCallback((value: string) => {
		schoolSelect.setValue(value)
	}, [])

	const handleGroupChange = useCallback((value: string) => {
		groupSelect.setValue(value)
	}, [])

	const handleAddSchedule = () => {
		console.log('Adding schedule...')
		onClose()
	}

	return (
		<Modal open={open} onClose={onClose} aria-labelledby='modal-title' aria-describedby='modal-description'>
			<Box sx={mainBox}>
				<ScheduleModalHeader title='Редактирование расписания' onClose={onClose} />

				<Box sx={content}>
					<Box sx={selectors}>
						<SelectItem value={schoolSelect.selectedValue} menuItems={schoolSelectItems} onChange={handleSchoolChange} />
						<SelectItem value={groupSelect.selectedValue} menuItems={groupSelectItems} onChange={handleGroupChange} />
					</Box>

					<Weekdays />

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
						<CustomDateTimePicker label='Период обучения' />
						<CustomDateTimePicker label='Время занятий' showTime />
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
