import { Box, Button } from '@mui/material'
import { footerContainer } from './ScheduleModalFooter.mui'
import { FC, memo } from 'react'

interface Props {
	onClose: () => void
	onAdd: () => void
}

const ScheduleModalFooter: FC<Props> = memo(({ onClose, onAdd }) => {
	return (
		<Box sx={footerContainer}>
			<Button variant='text' onClick={onClose}>
				Отмена
			</Button>
			<Button variant='outlined' color='primary' onClick={onAdd}>
				Добавить расписание
			</Button>
		</Box>
	)
})

export default ScheduleModalFooter
