import React, { useState } from 'react'

export default function LiveListWithFilter({ lives = [] }) {
  const [keyword, setKeyword] = useState('')

  const getFilteredLives = () => {
    if (keyword && keyword.length > 1) {
      return lives.filter(live => live.title.toLowerCase().includes(keyword.toLowerCase()))
    }
    return lives
  }
  return (
    <div className="live-list">
      <div>
        <input type="text" onChange={e => setKeyword(e.target.value)} />
      </div>
      <div className="grid">
        {getFilteredLives().map(({ link, posterUrl, title, date, club }) => (
          <a href={link}>
            <div className="item">
              <img src={posterUrl} alt={`${title} poster`} />
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
    </div>
  )
}
