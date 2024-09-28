import { useContext } from 'react'
import { StoreContext } from '../providers/StoreProvider'

export const useStores = () => {
	const context = useContext(StoreContext)
	if (!context) {
		throw new Error('useStores must be used within a StoreProvider')
	}
	return context
}
