import React from 'react';
import styles from './ReactSummary.module.css'



function ReactSummary() {
    return (
        <div className={styles.ReactSummaryBlock}>
        <div className={styles.ReactSummaryItem}>1</div>
        <div className={styles.ReactSummaryItem}>2</div>
        <div className={styles.ReactSummaryItem}>3</div>
        <div className={styles.ReactSummaryItem}>4</div>
        <div className={styles.ReactSummaryItem}>5</div>
        <div className={styles.ReactSummaryItem}>6</div>

        </div>

    )
}

export default ReactSummary;