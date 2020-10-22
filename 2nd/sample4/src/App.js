import musics from './musics.json'

import React from 'react'

import Layout from './Layout'
import Musics from './Musics'
import MyFavoriteMusics from './MyFavoriteMusics'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favoriteMusics: [],
    }
  }

  handleFavoriteClick = music => {
    if (!this.state.favoriteMusics.find(favoriteMusic => favoriteMusic.id === music.id)) {
      this.setState({
        favoriteMusics: [...this.state.favoriteMusics, music],
      })
    }
  }

  handleRemoveFavoriteClick = index => {
    const nextFavoriteMusics = [...this.state.favoriteMusics]
    nextFavoriteMusics.splice(index, 1)
    this.setState(nextFavoriteMusics)
  }

  render() {
    return (
      <Layout>
        <section>
          <h1>
            <span role="img" aria-label="music icon">
              🎼
            </span>
            최근 발매된 음악
          </h1>
          <Musics musics={musics} onFavoriteClick={this.handleFavoriteClick} />
        </section>
        <section>
          <h1>
            <span role="img" aria-label="star icon">
              ⭐
            </span>
            좋아요 누른 음악
          </h1>
          <MyFavoriteMusics musics={this.state.favoriteMusics} onRemoveFavoriteClick={this.handleRemoveFavoriteClick} />
        </section>
      </Layout>
    )
  }
}
