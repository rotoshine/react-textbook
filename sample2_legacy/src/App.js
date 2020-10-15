import Header from './Header.js'
import LiveList from './LiveList.js'
import LoadMoreButton from './LoadMoreButton.js'

import { fetchLives } from './api.js'

export default function App({ $app }) {
  this.state = {
    isInitialized: false,
    page: 0,
    isLoading: false,
    lives: [],
  }

  const $container = document.createElement('div')

  this.header = new Header({ $app })
  this.liveList = new LiveList({
    $container,
    state: {
      lives: this.state.lives,
    },
  })

  this.loadMoreButton = new LoadMoreButton({
    $container,
    onClick: () => {
      this.fetchAndAppendLives()
    },
  })

  $app.appendChild($container)

  this.fetchAndAppendLives = async () => {
    const nextPage = this.state.page + 1

    this.setState({
      isLoading: true,
    })

    const result = await fetchLives(nextPage)
    const lives = result.map(live => ({
      bands: live.bands,
      title: live.title,
      club: live.club,
      date: live.date,
      link: `https://idiots.band/live/${live.slug}/`,
      posterUrl: `https://admin.idiots.band${live.posters[0].url}`,
    }))

    const nextState = {
      isLoading: false,
      page: nextPage,
      lives: this.state.lives.concat(lives),
    }

    this.setState(nextState)
  }

  this.setState = nextState => {
    this.state = Object.assign({}, this.state, nextState)
    this.liveList.setState(this.state)
    this.loadMoreButton.setState(this.state)
  }

  this.render = () => {}

  this.fetchAndAppendLives()
}
