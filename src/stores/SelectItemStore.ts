import { makeAutoObservable } from 'mobx'

class SelectItemStore {
	selectedValue: string

	constructor(initialValue: string) {
		this.selectedValue = initialValue
		makeAutoObservable(this)
	}

	setValue(value: string) {
		this.selectedValue = value
	}
}

export default SelectItemStore
