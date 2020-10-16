import React from 'react'

export default function LoadMoreButton({ isLoading, onClick }) {
  return (
    <button
      className="load-more-button"
      disabled={isLoading}
      onClick={() => {
        if (!isLoading) {
          onClick()
        }
      }}
    >
      {isLoading ? 'Loading...' : 'Load More!!'}
    </button>
  )
}
