export default function LiveList({ $container, state }) {
  this.state = state

  const $grid = document.createElement('div')
  $grid.className = 'grid'

  $container.appendChild($grid)

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }
  this.render = () => {
    const { lives = [] } = this.state
    $grid.innerHTML = lives
      .map(
        live => `
      <a href="${live.link}">
        <div class="item">
          <img src="${live.posterUrl}" />
          <div class="description">
            <div class="title">${live.title}</div>
            <div class="place">${live.date} / ${live.club.name}$</div>
          </div>
        </div>
      </a>
    `
      )
      .join('')
  }

  this.render()
}
