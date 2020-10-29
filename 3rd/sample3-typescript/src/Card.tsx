import React from 'react'
import styles from './Card.module.css'

interface Props {
  title: string
  children: React.ReactNode
}
export default function Card({ title, children }: Props) {
  return (
    <section className={styles.card}>
      <header>
        <h1>{title}</h1>
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  )
}
