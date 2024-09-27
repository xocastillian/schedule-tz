import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { observer } from 'mobx-react-lite'
import WeekdaysStore from '../../../stores/WeekdaysStore'
import { dayGroups, daysOfWeek } from '../constants/constants'
import { toggleContainer } from './Weekdays.mui'

const Weekdays = observer(() => {
	const handleGroupSelection = (group: keyof typeof dayGroups) => {
		WeekdaysStore.handleGroupSelection(group)
	}

	const handleDayToggle = (day: string) => {
		WeekdaysStore.handleDayToggle(day)
	}

	return (
		<ToggleButtonGroup value={WeekdaysStore.selectedDays} aria-label='text formatting' fullWidth sx={toggleContainer}>
			{Object.keys(dayGroups).map(group => (
				<ToggleButton
					key={group}
					value={group}
					selected={WeekdaysStore.isGroupActive(group as keyof typeof dayGroups)}
					onClick={() => handleGroupSelection(group as keyof typeof dayGroups)}
					aria-label={group}
					color='primary'
				>
					{group}
				</ToggleButton>
			))}

			{daysOfWeek.map(day => (
				<ToggleButton
					key={day}
					value={day}
					selected={WeekdaysStore.selectedDays.includes(day)}
					onClick={() => handleDayToggle(day)}
					aria-label={day}
					color='primary'
				>
					{day}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	)
})

export default Weekdays
