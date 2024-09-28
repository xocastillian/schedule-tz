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
import { FC } from 'react'
import { useSchedule } from '../../../features/useSchedule'

interface ScheduleModalProps {
	open: boolean
	onClose: () => void
}

const ScheduleModal: FC<ScheduleModalProps> = observer(({ open, onClose }) => {
	const {
		handleHourTypeChange,
		handleBreakTimeChange,
		handleAddSchedule,
		handleTotalHoursIncrement,
		handleTotalHoursDecrement,
		handleDailyHoursIncrement,
		handleDailyHoursDecrement,
		dailyHoursCounter,
		totalHoursCounter,
		schoolSelect,
		groupSelect,
		mentorSelect,
		auditoriumSelect,
		hourTypeSelect,
		breakTimeSelect,
		dateTimePickerStore,
		weekdaysStore,
	} = useSchedule(onClose)

	return (
		<Modal open={open} onClose={onClose} aria-labelledby='modal-title' aria-describedby='modal-description'>
			<Box sx={mainBox}>
				<ScheduleModalHeader title='Редактирование расписания' onClose={onClose} />

				<Box sx={content}>
					<Box sx={selectors}>
						<SelectItem value={schoolSelect.selectedValue} menuItems={schoolSelectItems} onChange={value => schoolSelect.setValue(value)} />
						<SelectItem value={groupSelect.selectedValue} menuItems={groupSelectItems} onChange={value => groupSelect.setValue(value)} />
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
						<SelectItem value={mentorSelect.selectedValue} menuItems={mentorSelectItems} onChange={value => mentorSelect.setValue(value)} />
						<SelectItem
							value={auditoriumSelect.selectedValue}
							menuItems={auditoriumSelectItems}
							onChange={value => auditoriumSelect.setValue(value)}
						/>
					</Box>

					<Warning title='Выбор преподавателя и аудитории необязателен' />
				</Box>
				<ScheduleModalFooter onClose={onClose} onAdd={handleAddSchedule} />
			</Box>
		</Modal>
	)
})

export default ScheduleModal
