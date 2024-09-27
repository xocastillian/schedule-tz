import { observer } from 'mobx-react-lite'
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Box } from '@mui/material'
import styles from './DateTimePicker.module.css'
import { pickerContainer } from './DateTimePicker.mui'
import { dateTimePickerStore } from '../../../stores/DateTimePickerStore'
import { disableFutureDates } from '../utils'

interface DateTimePickerProps {
	label?: string
	showTime?: boolean
}

const CustomDateTimePicker: React.FC<DateTimePickerProps> = observer(({ label, showTime = false }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Box sx={pickerContainer}>
				{showTime ? (
					<>
						<TimePicker
							className={styles.picker}
							ampm={false}
							label={label && `${label} (начало)`}
							value={dateTimePickerStore.startTime}
							onChange={newValue => dateTimePickerStore.setStartTime(newValue)}
						/>
						<TimePicker
							className={styles.picker}
							ampm={false}
							label={label && `${label} (конец)`}
							value={dateTimePickerStore.endTime}
							onChange={newValue => dateTimePickerStore.setEndTime(newValue)}
						/>
					</>
				) : (
					<>
						<DatePicker
							className={styles.picker}
							label={label && `${label} (начало)`}
							value={dateTimePickerStore.startDate}
							onChange={newValue => dateTimePickerStore.setStartDate(newValue)}
							shouldDisableDate={disableFutureDates}
						/>
						<DatePicker
							className={styles.picker}
							label={label && `${label} (конец)`}
							value={dateTimePickerStore.endDate}
							onChange={newValue => dateTimePickerStore.setEndDate(newValue)}
							shouldDisableDate={disableFutureDates}
						/>
					</>
				)}
			</Box>
		</LocalizationProvider>
	)
})

export default CustomDateTimePicker
