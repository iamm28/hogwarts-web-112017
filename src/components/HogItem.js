import React from 'react'
import HogItemDetails from './HogItemDetails'

export default class HogItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      clicked: false
    }
  }
  greasy = () => {
    if (this.props.hog.greased) {
      return "That is one greasy hog"
    } else {
      return "Smooth and clean"
    }
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
  }

  render() {
    let details = null
    if (this.state.clicked) {
      details = <HogItemDetails specialty={this.props.hog.specialty} medal={this.props.hog.medal}/>
    }
    return (
      <div>
        <div onClick={this.handleClick}>
          <span>Name: {this.props.hog.name}</span>
          <span>Weight: {this.props.hog.weight}</span>
          <span>{this.greasy}</span>
        </div>
        {details}
      </div>
    )
  }
}
