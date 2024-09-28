import { makeAutoObservable } from 'mobx'
import { dateTimePickerStore } from './DateTimePickerStore'
import { HourType } from '../types'

class HoursCounterStore {
	count = 1

	constructor() {
		makeAutoObservable(this)
	}

	increment = () => {
		this.count += 1
		this.updateEndTime()
	}

	decrement = () => {
		if (this.count > 1) {
			this.count -= 1
			this.updateEndTime()
		}
	}

	updateEndTime() {
		const hourType = dateTimePickerStore.hourType
		const interval = hourType === HourType.ACADEMIC ? 45 : 60
		const totalMinutes = this.count * interval

		const breakTime = parseInt(dateTimePickerStore.breakTime, 10) || 0
		const totalBreakTime = (this.count - 1) * breakTime

		dateTimePickerStore.endTime = new Date(dateTimePickerStore.startTime.getTime() + (totalMinutes + totalBreakTime) * 60000)
	}
}

export default HoursCounterStore
