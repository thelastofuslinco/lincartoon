import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ onClick, text }) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}
