import { SelectItem } from '../SelectItem/types'

export const hourTypeSelectItems: SelectItem[] = [
	{ label: 'Академический час', value: 'academic' },
	{ label: 'Астрономический час', value: 'astronomic' },
]

export const breakTimeSelectItems: SelectItem[] = [
	{ label: '5 минут перерыва', value: '5' },
	{ label: '10 минут перерыва', value: '10' },
	{ label: '15 минут перерыва', value: '15' },
	{ label: '20 минут перерыва', value: '20' },
	{ label: '30 минут перерыва', value: '30' },
]

export const mentorSelectItems: SelectItem[] = [
	{ label: 'Выбор преподавателя', value: 'mentor_select' },
	{ label: 'Преподаватель 1', value: 'mentor_1' },
	{ label: 'Преподаватель 2', value: 'mentor_2' },
	{ label: 'Преподаватель 3', value: 'mentor_3' },
]

export const auditoriumSelectItems: SelectItem[] = [
	{ label: 'Выбор аудитории', value: 'auditorium_select' },
	{ label: 'Аудитория 1', value: 'auditorium_1' },
	{ label: 'Аудитория 2', value: 'auditorium_2' },
	{ label: 'Аудитория 3', value: 'auditorium_3' },
]
