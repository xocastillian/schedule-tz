import React, { createContext, FC } from 'react'
import DateTimePickerStore from '../stores/DateTimePickerStore'
import HoursCounterStore from '../stores/HoursCounterStore'
import WeekdaysStore from '../stores/WeekdaysStore'
import SelectItemStore from '../stores/SelectItemStore'
import { Stores } from '../types'

interface Props {
	children: React.ReactNode
}

export const StoreContext = createContext<Stores | null>(null)

export const StoreProvider: FC<Props> = ({ children }) => {
	const dateTimePickerStore = new DateTimePickerStore()

	const dailyHoursCounter = new HoursCounterStore(dateTimePickerStore)
	const totalHoursCounter = new HoursCounterStore(dateTimePickerStore)

	const weekdaysStore = new WeekdaysStore()

	const hourTypeSelect = new SelectItemStore('academic')
	const breakTimeSelect = new SelectItemStore('5')
	const auditoriumSelect = new SelectItemStore('auditorium_select')
	const mentorSelect = new SelectItemStore('mentor_select')
	const schoolSelect = new SelectItemStore('school_select')
	const groupSelect = new SelectItemStore('group_select')

	const stores = {
		dateTimePickerStore,
		dailyHoursCounter,
		totalHoursCounter,
		weekdaysStore,
		hourTypeSelect,
		breakTimeSelect,
		auditoriumSelect,
		mentorSelect,
		schoolSelect,
		groupSelect,
	}

	return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
}
