import { makeAutoObservable } from 'mobx'
import { HourType } from '../types'

class DateTimePickerStore {
	startDate: Date | null = new Date()
	endDate: Date | null = null
	startTime: Date = new Date()
	endTime: Date | null = null
	hourType: HourType = HourType.ACADEMIC
	breakTime: string = '5'

	constructor() {
		makeAutoObservable(this)
		this.startTime.setHours(9, 0, 0)
		this.updateEndTime()
	}

	setStartDate(date: Date | null) {
		this.startDate = date
	}

	setEndDate(date: Date | null) {
		this.endDate = date
	}

	setStartTime(value: Date) {
		this.startTime = value
		this.updateEndTime()
	}

	setEndTime(value: Date) {
		this.endTime = value
	}

	setHourType(value: HourType) {
		this.hourType = value
		this.updateEndTime()
	}

	setBreakTime(value: string) {
		this.breakTime = value
		this.updateEndTime()
	}

	updateEndTime(hoursCount: number = 1) {
		const interval = this.hourType === HourType.ACADEMIC ? 45 : 60
		const totalMinutes = hoursCount * interval

		const breakTime = parseInt(this.breakTime, 10) || 0
		const totalBreakTime = (hoursCount - 1) * breakTime

		this.endTime = new Date(this.startTime.getTime() + (totalMinutes + totalBreakTime) * 60000)
	}
}

export const dateTimePickerStore = new DateTimePickerStore()
