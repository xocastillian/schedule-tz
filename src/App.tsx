import { Button, Modal, Box } from '@mui/material'
import { useState } from 'react'
import SelectItem from './components/SelectItem/SelectItem'
import ScheduleModalHeader from './components/ScheduleModalHeader/ScheduleModalHeader'
import ScheduleModalFooter from './components/ScheduleModalFooter/ScheduleModalFooter'
import Weekdays from './components/Weekdays/Weekdays'
import HoursCounter from './components/HoursCounter/HoursCounter'
import CustomDateTimePicker from './components/DateTimePicker/DateTimePicker'

const mainBoxStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: '5px',
	width: 1100,
}

const contentStyle = {
	display: 'flex',
	flexDirection: 'column',
	p: 2,
	gap: 2,
}

const ScheduleModal = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const handleAddSchedule = () => {
		console.log('Adding schedule...')
		handleClose()
	}

	return (
		<div>
			<Button variant='contained' color='primary' onClick={handleOpen}>
				Open Schedule Modal
			</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby='modal-title' aria-describedby='modal-description'>
				<Box sx={mainBoxStyle}>
					<ScheduleModalHeader title='Редактирование расписания' onClose={handleClose} />

					<Box sx={contentStyle}>
						<Weekdays />

						<Box display={'flex'} gap={2}>
							<SelectItem
								defaultValue='academic'
								menuItems={[
									{ label: 'Академический час', value: 'academic' },
									{ label: 'Астрономический час', value: 'astronomic' },
								]}
								onChange={() => {}}
							/>
							<SelectItem
								defaultValue='5'
								menuItems={[
									{ label: '5 минут перерыва', value: '5' },
									{ label: '10 минут перерыва', value: '10' },
									{ label: '15 минут перерыва', value: '15' },
									{ label: '20 минут перерыва', value: '20' },
									{ label: '30 минут перерыва', value: '30' },
								]}
								onChange={() => {}}
							/>
						</Box>
						<Box display={'flex'} gap={2} justifyContent={'center'}>
							<HoursCounter title='Всего часов' />
							<HoursCounter title='Часов в день' />
						</Box>
						<Box display={'flex'} gap={2}>
							<CustomDateTimePicker label='Период обучения' />
							<CustomDateTimePicker label='Время занятий' showTime />
						</Box>
						<Box display={'flex'} gap={2}>
							<SelectItem
								defaultValue='mentor_select'
								menuItems={[
									{ label: 'Выбор преподавателя', value: 'mentor_select' },
									{ label: 'Преподаватель 1', value: 'mentor_1' },
									{ label: 'Преподаватель 2', value: 'mentor_2' },
									{ label: 'Преподаватель 3', value: 'mentor_3' },
								]}
								onChange={() => {}}
							/>
							<SelectItem
								defaultValue='auditorium_select'
								menuItems={[
									{ label: 'Выбор аудитории', value: 'auditorium_select' },
									{ label: 'Аудитория 1', value: 'auditorium_1' },
									{ label: 'Аудитория 2', value: 'auditorium_2' },
									{ label: 'Аудитория 3', value: 'auditorium_3' },
								]}
								onChange={() => {}}
							/>
						</Box>
					</Box>
					<ScheduleModalFooter onClose={handleClose} onAdd={handleAddSchedule} />
				</Box>
			</Modal>
		</div>
	)
}

export default ScheduleModal
