import './MyFavoriteMusics.scss'

import React from 'react'

export default function MyFavoriteMusics({ musics, onRemoveFavoriteClick }) {
  return (
    <div className="MyFavoriteMusics">
      {musics.map((music, index) => (
        <div key={music.id}>
          <img src={music.imageUrl} alt={`${music.name} poster`} />
          <div className="description">
            <div>
              {music.artistName} - {music.name}
            </div>
            <div>
              <button onClick={() => onRemoveFavoriteClick(index)}>
                <span role="img" aria-label="remove button image">
                  ❌
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
