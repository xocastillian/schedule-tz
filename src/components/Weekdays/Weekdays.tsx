import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useCallback, useState } from 'react'
import { dayGroups, daysOfWeek } from './constants'
import { toggleContainer } from './Weekdays.mui'

const Weekdays = () => {
	const [selectedDays, setSelectedDays] = useState<string[]>([])

	const handleGroupSelection = useCallback((group: keyof typeof dayGroups) => {
		setSelectedDays(dayGroups[group])
	}, [])

	const handleDayToggle = useCallback((day: string) => {
		setSelectedDays(prev => {
			const newSelectedDays = [...prev]
			const index = newSelectedDays.indexOf(day)
			if (index === -1) {
				newSelectedDays.push(day)
			} else {
				newSelectedDays.splice(index, 1)
			}
			return newSelectedDays
		})
	}, [])

	const isGroupActive = useCallback(
		(group: keyof typeof dayGroups) => dayGroups[group].every(day => selectedDays.includes(day)) && selectedDays.length === dayGroups[group].length,
		[selectedDays]
	)

	return (
		<ToggleButtonGroup value={selectedDays} aria-label='text formatting' fullWidth sx={toggleContainer}>
			{Object.keys(dayGroups).map(group => (
				<ToggleButton
					key={group}
					value={group}
					selected={isGroupActive(group)}
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
					selected={selectedDays.includes(day)}
					onClick={() => handleDayToggle(day)}
					aria-label={day}
					color='primary'
				>
					{day}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	)
}

export default Weekdays
