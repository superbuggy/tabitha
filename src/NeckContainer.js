import React, { Component } from 'react'
import Neck from './Neck'

export default class NeckContainer extends Component {
  constructor (props) {
    super(props)
    const activeNotes = this.props.tuning.reduce((actives, note, i) => (actives[`string${i+1}`] = null, actives), {})
    this.state = {
      strings: this.props.tuning.length,
      frets: this.props.frets,
      tuning: this.props.tuning,
      activeNotes,
    }
    console.log(this.state)
  }

  addNote = (e, note, string) => {
    this.setState((prevState, props) => ({
      activeNotes: {
        ...prevState.activeNotes,
        [`string${string}`]: note
      }
    }), console.log(this.state))
  }

  removeNote = (e, string) => {
    this.setState((prevState, props) => ({
      activeNotes: {
        ...prevState.activeNotes,
        [string]: null
      }
    }))
  }

  render() {
    return <Neck
      height={200}
      roots={this.state.tuning}
      frets={this.state.frets}
      strings={this.state.strings}
      addNote={this.addNote}
      removeNote={this.removeNote}
    />
  }
}
