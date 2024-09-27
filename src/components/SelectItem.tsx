import { MenuItem, Select } from '@mui/material'

interface Props {
	defaultValue: string
	menuItems: { label: string; value: string }[]
	onChange: (value: string) => void
}

const SelectItem: React.FC<Props> = ({ defaultValue, menuItems, onChange }) => {
	return (
		<Select
			labelId='demo-simple-select-label'
			id='demo-simple-select'
			defaultValue={defaultValue}
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
}

export default SelectItem
