import { Modal, Box } from '@mui/material'
import ScheduleModalHeader from '../ScheduleModalHeader/ScheduleModalHeader'
import Weekdays from '../Weekdays/Weekdays'
import SelectItem from '../SelectItem/SelectItem'
import HoursCounter from '../HoursCounter/HoursCounter'
import CustomDateTimePicker from '../DateTimePicker/DateTimePicker'
import ScheduleModalFooter from '../ScheduleModalFooter/ScheduleModalFooter'
import { content, counters, mainBox, pickers, selectors } from './ScheduleModal.mui'
import { auditoriumSelectItems, breakTimeSelectItems, hourTypeSelectItems, mentorSelectItems } from './constants'
import Warning from '../Warning/Warning'

interface ScheduleModalProps {
	open: boolean
	onClose: () => void
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ open, onClose }) => {
	const handleAddSchedule = () => {
		console.log('Adding schedule...')
		onClose()
	}

	return (
		<Modal open={open} onClose={onClose} aria-labelledby='modal-title' aria-describedby='modal-description'>
			<Box sx={mainBox}>
				<ScheduleModalHeader title='Редактирование расписания' onClose={onClose} />

				<Box sx={content}>
					<Weekdays />

					<Box sx={selectors}>
						<SelectItem defaultValue='academic' menuItems={hourTypeSelectItems} onChange={() => {}} />
						<SelectItem defaultValue='5' menuItems={breakTimeSelectItems} onChange={() => {}} />
					</Box>
					<Box sx={counters}>
						<HoursCounter title='Всего часов' />
						<HoursCounter title='Часов в день' />
					</Box>
					<Box sx={pickers}>
						<CustomDateTimePicker label='Период обучения' />
						<CustomDateTimePicker label='Время занятий' showTime />
					</Box>
					<Box sx={selectors}>
						<SelectItem defaultValue='mentor_select' menuItems={mentorSelectItems} onChange={() => {}} />
						<SelectItem defaultValue='auditorium_select' menuItems={auditoriumSelectItems} onChange={() => {}} />
					</Box>
					<Warning title='Выбор преподавателя и аудитории необязателен' />
				</Box>
				<ScheduleModalFooter onClose={onClose} onAdd={handleAddSchedule} />
			</Box>
		</Modal>
	)
}

export default ScheduleModal
