import './Musics.scss'

import React from 'react'

export default function Musics({ musics, onFavoriteClick }) {
  return (
    <div className="Musics">
      {musics.map(music => (
        <div key={music.id}>
          <img src={music.imageUrl} alt={`${music.name} poster`} />
          <div className="description">
            <div>
              {music.artistName} - {music.name}
            </div>
            <div>
              <button onClick={() => onFavoriteClick(music)}>
                <span role="img" aria-label="favorite button image">
                  ⭐
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
