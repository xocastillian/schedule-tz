import { FC } from 'react'
import styles from './Warning.module.css'

interface Props {
	title: string
}

const Warning: FC<Props> = ({ title }) => {
	return <div className={styles.container}>{title}</div>
}

export default Warning
