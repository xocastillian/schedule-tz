import { makeAutoObservable } from 'mobx'
import { HourType } from '../types'
import DateTimePickerStore from './DateTimePickerStore'

class HoursCounterStore {
	count = 1
	dateTimePickerStore: DateTimePickerStore

	constructor(dateTimePickerStore: DateTimePickerStore) {
		this.dateTimePickerStore = dateTimePickerStore
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
		const hourType = this.dateTimePickerStore.hourType
		const interval = hourType === HourType.ACADEMIC ? 45 : 60
		const totalMinutes = this.count * interval

		const breakTime = parseInt(this.dateTimePickerStore.breakTime, 10) || 0
		const totalBreakTime = (this.count - 1) * breakTime

		this.dateTimePickerStore.endTime = new Date(this.dateTimePickerStore.startTime.getTime() + (totalMinutes + totalBreakTime) * 60000)
	}
}

export default HoursCounterStore
