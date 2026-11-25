import styles from './progressbar.module.css'

export const ProgressBar = ({ percent }) => {

    return (
        <div className={styles.wrapper}>
             <div className={styles.progress} style={{ width: `${percent}%` }}>
                {percent}%
            </div>
        </div>
    )
}