import styles from './Card.module.css'

export default function Card({ title, children }) {
  return (
    <section className={styles.card}>
      <header>
        <h1>{title}</h1>
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  )
}
