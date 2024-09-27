import { Button, Modal, Box } from '@mui/material'
import React from 'react'
import SelectItem from './components/SelectItem'
import ScheduleModalHeader from './components/ScheduleModalHeader'
import ScheduleModalFooter from './components/ScheduleModalFooter'
import Weekdays from './components/Weekdays/Weekdays'

const mainBoxStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: '5px',
	width: 1000,
}

const contentStyle = {
	p: 2,
}

const ScheduleModal = () => {
	const [open, setOpen] = React.useState(false)
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
					{/* Header */}
					<ScheduleModalHeader title='Редактирование расписания' onClose={handleClose} />

					{/* Main content */}
					<Box sx={contentStyle}>
						{/* Select item for the type of hour */}
						<SelectItem
							defaultValue='academic'
							menuItems={[
								{ label: 'Академические', value: 'academic' },
								{ label: 'Астрономические', value: 'astronomic' },
							]}
							onChange={() => {}}
						/>
						<SelectItem
							defaultValue='without_break'
							menuItems={[
								{ label: 'Без перерыва', value: 'without_break' },
								{ label: '5 минут', value: '5' },
								{ label: '10 минут', value: '10' },
								{ label: '15 минут', value: '15' },
								{ label: '20 минут', value: '20' },
								{ label: '30 минут', value: '30' },
							]}
							onChange={() => {}}
						/>
					</Box>

					<Weekdays />

					{/* Footer */}
					<ScheduleModalFooter onClose={handleClose} onAdd={handleAddSchedule} />
				</Box>
			</Modal>
		</div>
	)
}

export default ScheduleModal
