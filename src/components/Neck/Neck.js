import React, { Component } from 'react'
import Fretboard from '../Fretboard/Fretboard'
import FretboardControls from '../FretboardControls/FretboardControls'

export default class Neck extends Component {
  constructor (props) {
    super(props)
    const tuning = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2']
    this.state = {
      tuning,
      frets: 24,
      strings: 6,
      activeNotes: this.initializeActiveNotes(tuning) 
    }
  }
  
  initializeActiveNotes (tuning) {
    return tuning.reduce((activeNotes, _, index) => {
      activeNotes[`string${index + 1}`] = null
      return activeNotes
    }, {})
  }

  handleChange = ({ target, ...event }) => {
    this.setState(({activeNotes, strings, tuning, ...prevState}) => {
      const value = target.type === 'number' ? parseInt(target.value) : target.value

      let newTuning = tuning
      if (target.name ==='strings' && value < strings) newTuning = tuning.slice(0, -1)
      if (target.name ==='strings' && value > strings) newTuning = [...tuning, 'C0']

      return {
        [target.name]: value,
        activeNotes: this.initializeActiveNotes(newTuning),
        tuning: newTuning
      }
    })
  }

  updateTuning = (e, guitarString, note) => {
    this.setState(({ tuning }) => ({
      tuning: [
        ...tuning.slice(0, guitarString),
        note,
        ...tuning.slice(guitarString + 1, tuning.length)
      ]
    }))
  }

  updateActiveNote = (e, fret, guitarString) => {
    this.setState(({ activeNotes, ...prevState }) => {
      const currentString = `string${guitarString}`
      const currentFret = activeNotes[currentString]
      activeNotes[currentString] = currentFret === fret ? null : fret //toggle note if already selected
      return { activeNotes }
    })
  }

  render() {
    const {tuning, frets, strings, activeNotes} = this.state
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column'
    }
    return (
      <div>
        <Fretboard 
          minHeight={200}
          roots={tuning}
          frets={frets}
          strings={strings}
          updateActiveNote={this.updateActiveNote}
        />

        <FretboardControls
          handleChange={this.handleChange}
          tuning={tuning}
          frets={frets}
          activeNotes={activeNotes}
          strings={strings}
          updateTuning={this.updateTuning}
        />
      </div>
    )
  }
}
