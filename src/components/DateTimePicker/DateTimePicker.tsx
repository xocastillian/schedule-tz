import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useState } from 'react'
import { Box } from '@mui/material'
import styles from './DateTimePicker.module.css'

interface DateTimePickerProps {
	label?: string
	showTime?: boolean
}

const CustomDateTimePicker: React.FC<DateTimePickerProps> = ({ label, showTime = false }) => {
	const [startDate, setStartDate] = useState<Date | null>(null)
	const [endDate, setEndDate] = useState<Date | null>(null)
	const [startTime, setStartTime] = useState<Date | null>(null)
	const [endTime, setEndTime] = useState<Date | null>(null)

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Box display={'flex'} gap={2} height={56}>
				{showTime ? (
					<>
						{/* Выбор диапазона времени */}
						<TimePicker
							className={styles.picker}
							ampm={false}
							label={label && `${label} (начало)`}
							value={startTime}
							onChange={newValue => setStartTime(newValue)}
						/>
						<TimePicker
							className={styles.picker}
							ampm={false}
							label={label && `${label} (конец)`}
							value={endTime}
							onChange={newValue => setEndTime(newValue)}
						/>
					</>
				) : (
					<>
						{/* Выбор диапазона дат */}
						<DatePicker
							className={styles.picker}
							label={label && `${label} (начало)`}
							value={startDate}
							onChange={newValue => setStartDate(newValue)}
						/>
						<DatePicker className={styles.picker} label={label && `${label} (конец)`} value={endDate} onChange={newValue => setEndDate(newValue)} />
					</>
				)}
			</Box>
		</LocalizationProvider>
	)
}

export default CustomDateTimePicker
