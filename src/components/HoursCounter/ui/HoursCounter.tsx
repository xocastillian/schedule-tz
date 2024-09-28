import { BiMinus, BiPlus } from 'react-icons/bi'
import styles from './HoursCounter.module.css'
import { memo } from 'react'

interface Props {
	title?: string
	increment: () => void
	decrement: () => void
	count: number
	disableDecrement?: boolean
}

const HoursCounter: React.FC<Props> = memo(({ title, increment, decrement, count, disableDecrement }) => {
	return (
		<div className={styles.wrapper}>
			{title && <h3>{title}</h3>}
			<div className={styles.container}>
				<button
					className={`${styles.btn} ${disableDecrement ? styles.disabled : ''}`}
					onClick={disableDecrement ? undefined : decrement}
					disabled={disableDecrement}
				>
					<BiMinus color='white' />
				</button>
				<div className={styles.counter}>
					<span>{count}</span>
				</div>
				<button className={styles.btn} onClick={increment}>
					<BiPlus color='white' />
				</button>
			</div>
		</div>
	)
})

export default HoursCounter
