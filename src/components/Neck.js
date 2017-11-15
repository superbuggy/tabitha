import React, { Component } from 'react'
import Fretboard from './Fretboard'
import FretboardControls from './FretboardControls'

export default class Neck extends Component {
  constructor (props) {
    super(props)
    const tuning = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2']
    const frets = 24
    const strings = 6
    // const activeNotes = tuning.reduce((actives, note, i) => (actives[`string${i + 1}`] = null, actives), {})
    const activeNotes = this.mapActiveNotes(tuning)
    this.state = {
      tuning,
      frets,
      strings,
      activeNotes
    }
  }
  
  mapActiveNotes (tuning) {
    const activeNotes = tuning.reduce((actives, note, i) => (actives[`string${i + 1}`] = null, actives), {})
    return activeNotes
  }

  handleChange = ({ target, ...event }) => {
    const value = target.type === 'number' ? +target.value : target.value
    if (target.name ==='strings' && value > this.state.strings) {
      this.state.tuning.push("X#")
      this.mapActiveNotes(this.tuning)
    }
    this.setState(_ => ({
      [target.name]: value
    }), _ => console.log(this.state))
  }

  updateActiveNote = () => {
    this.setState(_ => {

    }, _ => console.log('up', this.state))
  }

  render() {
    const {tuning, frets, strings} = this.state
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column'
    }
    return (
      <div>
        <Fretboard minHeight={200} roots={tuning} frets={frets} strings={strings} />
        <FretboardControls handleChange={this.handleChange} tuning={tuning} frets={frets} strings={strings} />
      </div>
    )
  }
}