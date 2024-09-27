import { makeAutoObservable } from 'mobx'

class HoursCounterStore {
	count = 0

	constructor() {
		makeAutoObservable(this)
	}

	increment = () => {
		this.count += 1
	}

	decrement = () => {
		if (this.count > 0) {
			this.count -= 1
		}
	}
}

export default HoursCounterStore
