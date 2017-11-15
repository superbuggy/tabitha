import React, { Component } from 'react'
import NeckContainer from './NeckContainer'
import NeckControls from './NeckControls'

export default class Fretboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']
    const frets = 24
    const strings = 6
    return (
      <div>
        <NeckContainer tuning={tuning} frets={frets} strings={strings} />
        <NeckControls tuning={tuning} frets={frets} strings={strings} />
      </div>
    )
  }
}