export const disableFutureDates = (date: Date) => {
	return date < new Date()
}
