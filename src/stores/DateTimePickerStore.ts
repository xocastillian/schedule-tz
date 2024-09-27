import { makeAutoObservable } from 'mobx'

class DateTimePickerStore {
	startDate: Date | null = new Date()
	endDate: Date | null = null
	startTime: Date | null = null
	endTime: Date | null = null

	constructor() {
		makeAutoObservable(this)
	}

	setStartDate(date: Date | null) {
		this.startDate = date
	}

	setEndDate(date: Date | null) {
		this.endDate = date
	}

	setStartTime(time: Date | null) {
		this.startTime = time
	}

	setEndTime(time: Date | null) {
		this.endTime = time
	}
}

export const dateTimePickerStore = new DateTimePickerStore()
