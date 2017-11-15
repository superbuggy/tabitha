import React, { Component } from 'react'
import Neck from './Neck'

export default class NeckContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      strings: 6,
      frets: 24,
      tuning: ['E', 'A', 'D', 'G', 'B', 'E']
    }
  }

  render() {
    return <Neck
      height={200}
      roots={this.state.tuning}
      frets={this.state.frets}
      strings={this.state.strings}
    />
  }
}
