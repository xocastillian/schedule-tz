import { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import styles from './HoursCounter.module.css'

interface Props {
	title?: string
}

const HoursCounter: React.FC<Props> = ({ title }) => {
	const [count, setCount] = useState(0)

	const increment = () => setCount(prevCount => prevCount + 1)
	const decrement = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))

	return (
		<div className={styles.wrapper}>
			{title && <h3>{title}</h3>}
			<div className={styles.container}>
				<button className={styles.btn} onClick={decrement}>
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
}

export default HoursCounter
