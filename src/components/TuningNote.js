import React, { Component } from 'react'
import { Note, Scale } from 'tonal'

export default class TuningNote extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // note: Note.from({ alt: 0 }, Note.simplify(this.props.note)),
      note: Note.pc(this.props.note),
      octave: Note.oct(this.props.note),
    }
  }


  handleChange = (e) => {
    e.persist()
    this.setState(
      _ => ({[e.target.name]: e.target.value}),
      _ => {
        const note = this.state.note + this.state.octave
        this.props.updateTuning(e, this.props.string - 1, note)
      }
    )
  }

  render() {
    const tuningNoteStyle = {
      color: 'rgb(255, 222, 64)',
      background: 'darkgrey',
      border: '1px solid black',
      boxSizing: 'border-box',
      padding: '0px .25em', 
      fontFamily: 'monospace',
      fontSize: '16px',
      minWidth: '100%',
      maxWidth: '3em',
    }
    const inputStyle = {
      fontSize: '16px',
      minWidth: '3em',
      maxWidth: '3em',
      minHeight: '1em',
      maxHeight: '1em',
      padding: '0',
      margin: '0',
      border: '1px solid black',
      color: 'rgb(255, 222, 64)',
      background: 'darkgrey',
      fontFamily: 'monospace',
    }
    const formStyle = {
      maxWidth: '3em',
      border: '0',
      margin: '0',
      padding: '0',
      minWidth: '3em',
      marginTop: '1em',
      padding: 0
    }


    const notesForSelect = Scale.notes('C chromatic')
    const octaves = Array.from('012345678')

    const octaveOptions = octaves.map((octave, index) => (
      <option key={index} value={octave}> {octave} </option> 
    ))

    const noteOptions = notesForSelect.map((note, index) => (
      <option key={index} value={note}> {note} </option>
    ))

    return (
      <form style={formStyle}>
        <select defaultValue={this.state.note} name="note" onChange={this.handleChange}>
          {noteOptions}
        </select>
        <select defaultValue={this.state.octave} name="octave" onChange={this.handleChange}>
          {octaveOptions}
        </select>
      </form>
    )
  }
}
