import { observer } from 'mobx-react-lite'
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Box } from '@mui/material'
import styles from './DateTimePicker.module.css'
import { pickerContainer } from './DateTimePicker.mui'
import { HourType } from '../../../types'
import { disableFutureDates, getInterval } from '../utils'
import DateTimePickerStore from '../../../stores/DateTimePickerStore'
import { FC } from 'react'

interface Props {
	label?: string
	showTime?: boolean
	store: DateTimePickerStore
}

const CustomDateTimePicker: FC<Props> = observer(({ label, showTime = false, store }) => {
	const interval = getInterval(store.hourType as HourType, showTime)

	const handleStartTimeChange = (newValue: Date | null) => {
		if (newValue) {
			store.setStartTime(newValue)
			store.setEndTime(new Date(newValue.getTime() + interval * 60000))
		}
	}

	const handleEndTimeChange = (newValue: Date | null) => {
		if (newValue) {
			store.setEndTime(newValue)
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
							value={store.startTime}
							onChange={handleStartTimeChange}
						/>
						<TimePicker
							className={styles.picker}
							ampm={false}
							label={label && `${label} (конец)`}
							value={store.endTime}
							onChange={handleEndTimeChange}
							minTime={new Date(store.startTime.getTime() + interval * 60000)}
							disabled
						/>
					</>
				) : (
					<>
						<DatePicker
							className={styles.picker}
							label={label && `${label} (не успел сделать)`}
							value={store.startDate}
							onChange={newValue => store.setStartDate(newValue)}
							shouldDisableDate={disableFutureDates}
							disabled
						/>
						<DatePicker
							className={styles.picker}
							label={label && `${label} (не успел сделать)`}
							value={store.endDate}
							onChange={newValue => store.setEndDate(newValue)}
							shouldDisableDate={disableFutureDates}
							disabled
						/>
					</>
				)}
			</Box>
		</LocalizationProvider>
	)
})

export default CustomDateTimePicker
