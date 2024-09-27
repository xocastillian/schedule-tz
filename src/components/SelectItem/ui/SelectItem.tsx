import { MenuItem, Select } from '@mui/material'
import { selectContainer } from './SelectItem.mui'
import { memo } from 'react'

interface Props {
	value: string
	menuItems: { label: string; value: string }[]
	onChange: (value: string) => void
}

const SelectItem: React.FC<Props> = memo(({ value, menuItems, onChange }) => {
	return (
		<Select
			sx={selectContainer}
			labelId='demo-simple-select-label'
			id='demo-simple-select'
			value={value}
			fullWidth
			onChange={e => onChange(e.target.value as string)}
		>
			{menuItems.map(item => (
				<MenuItem key={item.value} value={item.value}>
					{item.label}
				</MenuItem>
			))}
		</Select>
	)
})

export default SelectItem
