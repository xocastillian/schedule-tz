import { SxProps } from '@mui/material'

export const mainBox: SxProps = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: '5px',
	width: 1100,
}

export const content = {
	display: 'flex',
	flexDirection: 'column',
	p: 2,
	gap: 2,
}

export const selectors: SxProps = {
	display: 'flex',
	gap: 2,
}

export const pickers: SxProps = {
	display: 'flex',
	gap: 2,
}

export const counters: SxProps = {
	display: 'flex',
	gap: 2,
	justifyContent: 'center',
}
