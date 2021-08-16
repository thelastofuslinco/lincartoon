import React from 'react'
import styles from './Input.module.scss'

export const Input = ({ type, value, onChange, onKeyDown }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}
