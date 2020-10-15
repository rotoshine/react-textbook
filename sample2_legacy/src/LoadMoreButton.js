export default function LoadMoreButton({ $container, state, onClick }) {
  this.state = state
  this.handleClick = onClick

  const $button = document.createElement('button')
  $button.className = 'load-more-button'
  $container.appendChild($button)

  $button.addEventListener('click', () => this.handleClick())

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    if (this.state.isLoading) {
      $button.innerHTML = 'Loading...'
      $button.setAttribute('disabled', 'disabled')
    } else {
      $button.innerHTML = 'Load More!!'
      $button.removeAttribute('disabled')
    }
  }
}
