import { Box, Typography, IconButton } from '@mui/material'
import { CgClose } from 'react-icons/cg'
import { headerContainer } from './ScheduleModalHeader.mui'

interface Props {
	title: string
	onClose: () => void
}

const ScheduleModalHeader: React.FC<Props> = ({ title, onClose }) => {
	return (
		<Box sx={headerContainer}>
			<Typography id='modal-title' variant='h6'>
				{title}
			</Typography>
			<IconButton onClick={onClose}>
				<CgClose />
			</IconButton>
		</Box>
	)
}

export default ScheduleModalHeader
