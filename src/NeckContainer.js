import React, { Component } from 'react'
import Neck from './Neck'

export default class NeckContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strings: 6,
      frets: 24
    }
  }

  render() {
    return <Neck 
      frets={this.state.frets}
      strings={this.state.strings}
    />
  }
}
