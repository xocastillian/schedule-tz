import { observer } from 'mobx-react-lite'
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Box } from '@mui/material'
import styles from './DateTimePicker.module.css'
import { pickerContainer } from './DateTimePicker.mui'
import { dateTimePickerStore } from '../../../stores/DateTimePickerStore'
import { disableFutureDates, getInterval } from '../utils'
import { HourType } from '../../../types'

interface Props {
	label?: string
	showTime?: boolean
}

const CustomDateTimePicker: React.FC<Props> = observer(({ label, showTime = false }) => {
	const interval = getInterval(dateTimePickerStore.hourType as HourType, showTime)

	const handleStartTimeChange = (newValue: Date | null) => {
		if (newValue) {
			dateTimePickerStore.setStartTime(newValue)
			dateTimePickerStore.setEndTime(new Date(newValue.getTime() + interval * 60000))
		}
	}

	const handleEndTimeChange = (newValue: Date | null) => {
		if (newValue) {
			dateTimePickerStore.setEndTime(newValue)
		}
	}

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
							onChange={handleStartTimeChange}
						/>
						<TimePicker
							className={styles.picker}
							ampm={false}
							label={label && `${label} (конец)`}
							value={dateTimePickerStore.endTime}
							onChange={handleEndTimeChange}
							minTime={new Date(dateTimePickerStore.startTime.getTime() + interval * 60000)}
							disabled
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
