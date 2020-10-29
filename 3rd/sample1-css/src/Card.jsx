// import './Card.css'
import './Card.scss'

export default function Card({ title, children }) {
  return (
    <section className="Card">
      <header>
        <h1>{title}</h1>
      </header>
      <div className="content">{children}</div>
    </section>
  )
}
