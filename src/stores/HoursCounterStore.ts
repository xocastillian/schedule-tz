import { makeAutoObservable } from 'mobx'
import { HourType } from '../types'
import { dateTimePickerStore } from './DateTimePickerStore'

class HoursCounterStore {
	count = 1

	constructor() {
		makeAutoObservable(this)
	}

	increment = () => {
		this.count += 1
	}

	decrement = () => {
		if (this.count > 1) {
			this.count -= 1
		}
	}

	setCount = (value: number) => {
		this.count = value
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
