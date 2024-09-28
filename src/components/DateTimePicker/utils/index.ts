import { HourType } from '../../../types'

export const disableFutureDates = (date: Date) => {
	return date < new Date()
}

export const getInterval = (hourType: HourType, showTime: boolean) => {
	return showTime ? (hourType === HourType.ACADEMIC ? 45 : 60) : 0
}
