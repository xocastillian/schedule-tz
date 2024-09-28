import DateTimePickerStore from '../stores/DateTimePickerStore'
import HoursCounterStore from '../stores/HoursCounterStore'
import SelectItemStore from '../stores/SelectItemStore'
import WeekdaysStore from '../stores/WeekdaysStore'

export interface SelectItem {
	label: string
	value: string
}

export enum HourType {
	ACADEMIC = 'academic',
	ASTRONOMIC = 'astronomic',
}

export interface Stores {
	dateTimePickerStore: DateTimePickerStore
	dailyHoursCounter: HoursCounterStore
	totalHoursCounter: HoursCounterStore
	weekdaysStore: WeekdaysStore
	hourTypeSelect: SelectItemStore
	breakTimeSelect: SelectItemStore
	auditoriumSelect: SelectItemStore
	mentorSelect: SelectItemStore
	schoolSelect: SelectItemStore
	groupSelect: SelectItemStore
}
