import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { observer } from 'mobx-react-lite'
import WeekdaysStore from '../../../stores/WeekdaysStore'
import { dayGroups, daysOfWeek } from '../constants/constants'
import { toggleContainer } from './Weekdays.mui'

interface WeekdaysProps {
	store: WeekdaysStore
}

const Weekdays: React.FC<WeekdaysProps> = observer(({ store }) => {
	const handleGroupSelection = (group: keyof typeof dayGroups) => {
		store.handleGroupSelection(group)
	}

	const handleDayToggle = (day: string) => {
		store.handleDayToggle(day)
	}

	return (
		<ToggleButtonGroup value={store.selectedDays} aria-label='text formatting' fullWidth sx={toggleContainer}>
			{Object.keys(dayGroups).map(group => (
				<ToggleButton
					key={group}
					value={group}
					selected={store.isGroupActive(group as keyof typeof dayGroups)}
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
					selected={store.selectedDays.includes(day)}
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
