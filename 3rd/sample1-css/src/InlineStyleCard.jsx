import React, { useRef } from 'react'

export default function Card({ title, children }) {
  const cardRef = useRef(null)

  return (
    <section
      ref={cardRef}
      style={{
        margin: 10,
        borderRadius: 5,
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        maxWidth: 300,
      }}
      onMouseEnter={() => {
        cardRef.current.style.boxShadow = '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
      }}
      onMouseLeave={() => {
        cardRef.current.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
      }}
    >
      <header
        style={{
          borderBottom: '1px solid #999',
          padding: '0.3rem 1rem',
          fontSize: '1.5rem',
        }}
      >
        <h1 style={{ margin: 0 }}>{title}</h1>
      </header>
      <div
        style={{
          padding: 10,
        }}
      >
        {children}
      </div>
    </section>
  )
}
