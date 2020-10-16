import React, { useState, useEffect } from 'react'

import LoadMoreButton from './LoadMoreButton'
import Header from './Header'
import LiveList from './LiveListWithFilter'

import { fetchLives } from './api'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [lives, setLives] = useState([])
  const [page, setPage] = useState(1)

  const loadLives = async page => {
    setIsLoading(true)
    setPage(page)
    const loadedLives = await fetchLives(page)
    setLives(lives.concat(loadedLives))
    setIsLoading(false)
  }

  const handleClick = () => {
    loadLives(page + 1)
  }
  useEffect(() => {
    loadLives(1)
    // eslint-disable-next-line
  }, [])

  return (
    <div class="app">
      <Header />
      <div class="container">
        <LiveList lives={lives} />
        <LoadMoreButton isLoading={isLoading} onClick={handleClick} />
      </div>
    </div>
  )
}

export default App
