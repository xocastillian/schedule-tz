import { Button } from '@mui/material'
import { useState } from 'react'
import ScheduleModal from './components/ScheduleModal/ui/ScheduleModal'
import styles from './App.module.css'

const App = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<main>
			<div className={styles.btn}>
				<Button variant='contained' color='primary' onClick={handleOpen}>
					Open Schedule Modal
				</Button>
			</div>
			<ScheduleModal open={open} onClose={handleClose} />
		</main>
	)
}

export default App
