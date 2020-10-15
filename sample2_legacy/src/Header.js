export default function Header({ $app }) {
  const $header = document.createElement('header')
  $app.appendChild($header)
  this.render = () => {
    $header.innerHTML = '밴드 이디어츠 공연 일정'
  }
  this.render()
}
