import { Box, Typography, IconButton } from '@mui/material'
import { CgClose } from 'react-icons/cg'

interface Props {
	title: string
	onClose: () => void
}

const ScheduleModalHeader: React.FC<Props> = ({ title, onClose }) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #606060' }}>
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
