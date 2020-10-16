import React from 'react'

export default function LiveList({ lives = [] }) {
  return (
    <div className="grid">
      {lives.map(({ link, posterUrl, title, date, club }) => (
        <a href={link}>
          <div className="item">
            <img src={posterUrl} />
            <div className="description">
              <div className="title">{title}</div>
              <div className="place">
                {date} / {club.name}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
