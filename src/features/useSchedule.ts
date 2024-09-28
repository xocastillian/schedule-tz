import { useCallback } from 'react'
import { useStores } from '../contexts/useStore'
import { HourType } from '../types'

export const useSchedule = (onClose: () => void) => {
	const {
		dateTimePickerStore,
		dailyHoursCounter,
		totalHoursCounter,
		weekdaysStore,
		hourTypeSelect,
		breakTimeSelect,
		mentorSelect,
		auditoriumSelect,
		schoolSelect,
		groupSelect,
	} = useStores()

	const handleHourTypeChange = useCallback(
		(value: string) => {
			hourTypeSelect.setValue(value)
			dateTimePickerStore.setHourType(value as HourType)
			dateTimePickerStore.updateEndTime(dailyHoursCounter.count)
		},
		[dateTimePickerStore, hourTypeSelect, dailyHoursCounter]
	)

	const handleBreakTimeChange = useCallback(
		(value: string) => {
			breakTimeSelect.setValue(value)
			dateTimePickerStore.setBreakTime(value)
			dailyHoursCounter.updateEndTime()
		},
		[dailyHoursCounter, dateTimePickerStore, breakTimeSelect]
	)

	const handleTotalHoursIncrement = useCallback(() => {
		totalHoursCounter.increment()
	}, [totalHoursCounter])

	const handleTotalHoursDecrement = useCallback(() => {
		if (totalHoursCounter.count > dailyHoursCounter.count) {
			totalHoursCounter.decrement()
		}
	}, [totalHoursCounter, dailyHoursCounter])

	const handleDailyHoursIncrement = useCallback(() => {
		dailyHoursCounter.increment()
		if (dailyHoursCounter.count > totalHoursCounter.count) {
			totalHoursCounter.setCount(dailyHoursCounter.count)
		}
		dailyHoursCounter.updateEndTime()
	}, [dailyHoursCounter, totalHoursCounter])

	const handleDailyHoursDecrement = useCallback(() => {
		dailyHoursCounter.decrement()
		dailyHoursCounter.updateEndTime()
	}, [dailyHoursCounter])

	const handleAddSchedule = useCallback(() => {
		const scheduleData = {
			school: schoolSelect.selectedValue,
			group: groupSelect.selectedValue,
			mentor: mentorSelect.selectedValue,
			auditorium: auditoriumSelect.selectedValue,
			totalHours: totalHoursCounter.count,
			dailyHours: dailyHoursCounter.count,
			hourType: hourTypeSelect.selectedValue,
			breakTime: breakTimeSelect.selectedValue,
			startDate: dateTimePickerStore.startDate,
			endDate: dateTimePickerStore.endDate,
			selectedWeekdays: weekdaysStore.selectedDays,
		}
		console.log('Schedule data:', JSON.stringify(scheduleData, null, 2))
		onClose()
	}, [
		onClose,
		schoolSelect,
		groupSelect,
		mentorSelect,
		auditoriumSelect,
		totalHoursCounter,
		dailyHoursCounter,
		hourTypeSelect,
		breakTimeSelect,
		dateTimePickerStore,
		weekdaysStore,
	])

	return {
		handleHourTypeChange,
		handleBreakTimeChange,
		handleAddSchedule,
		handleTotalHoursIncrement,
		handleTotalHoursDecrement,
		handleDailyHoursIncrement,
		handleDailyHoursDecrement,
		dailyHoursCounter,
		totalHoursCounter,
		schoolSelect,
		groupSelect,
		mentorSelect,
		auditoriumSelect,
		hourTypeSelect,
		breakTimeSelect,
		dateTimePickerStore,
		weekdaysStore,
	}
}
