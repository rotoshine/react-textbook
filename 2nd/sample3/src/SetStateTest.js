import React from 'react'

export default class SetStateTest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: true,
    }
  }

  /*
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isChecked !== this.state.isChecked
  }*/

  render() {
    console.log('렌더링 호출!', this.state)
    return (
      <div className="SetStateTest">
        <div>
          <div>
            <button onClick={() => this.setState({ isChecked: true })}>의미 없지만 눌러보세요</button>
          </div>
        </div>
      </div>
    )
  }
}
