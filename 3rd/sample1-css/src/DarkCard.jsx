import styles from './DarkCard.module.css'

export default function DarkCard({ title, children }) {
  return (
    <section className={styles.card}>
      <header>
        <h1>{title}</h1>
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  )
}
