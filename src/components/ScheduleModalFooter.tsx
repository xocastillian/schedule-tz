import { Box, Button } from '@mui/material'

interface Props {
	onClose: () => void
	onAdd: () => void
}

const ScheduleModalFooter: React.FC<Props> = ({ onClose, onAdd }) => {
	return (
		<Box sx={{ display: 'flex', direction: 'row', gap: 2, p: 2, justifyContent: 'flex-end' }}>
			<Button variant='text' onClick={onClose}>
				Отмена
			</Button>
			<Button variant='outlined' color='primary' onClick={onAdd}>
				Добавить расписание
			</Button>
		</Box>
	)
}

export default ScheduleModalFooter
