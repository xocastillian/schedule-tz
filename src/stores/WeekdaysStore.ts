import { makeAutoObservable } from 'mobx'
import { dayGroups } from '../components/Weekdays/constants/constants'

class WeekdaysStore {
	selectedDays: string[] = []

	constructor() {
		makeAutoObservable(this)
	}

	handleGroupSelection(group: keyof typeof dayGroups) {
		this.selectedDays = dayGroups[group]
	}

	handleDayToggle(day: string) {
		const index = this.selectedDays.indexOf(day)
		if (index === -1) {
			this.selectedDays.push(day)
		} else {
			this.selectedDays.splice(index, 1)
		}
	}

	isGroupActive(group: keyof typeof dayGroups) {
		return dayGroups[group].every(day => this.selectedDays.includes(day)) && this.selectedDays.length === dayGroups[group].length
	}
}

export default WeekdaysStore
