import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { dailyHoursCounterStore, DailyHoursStoreContext, totalHoursCounterStore, TotalHoursStoreContext } from './stores/HoursCounterStore.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* <TotalHoursStoreContext.Provider value={totalHoursCounterStore}>
			<DailyHoursStoreContext.Provider value={dailyHoursCounterStore}> */}
		<App />
		{/* </DailyHoursStoreContext.Provider>
		</TotalHoursStoreContext.Provider> */}
	</StrictMode>
)
