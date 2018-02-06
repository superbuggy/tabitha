import React, { Component } from 'react'
import './TuningNote.css'
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

    const notesForSelect = Scale.notes('C chromatic')
    const octaves = Array.from('012345678')

    const octaveOptions = octaves.map((octave, index) => (
      <option key={index} value={octave}> {octave} </option> 
    ))

    const noteOptions = notesForSelect.map((note, index) => (
      <option key={index} value={note}> {note} </option>
    ))

    return (
      <form className={'tuning-note-form'}>
        <select
          className={'tuning-note-select'}
          defaultValue={this.state.note} 
          name={"note"} 
          onChange={this.handleChange}>
          {noteOptions}
        </select>
        <select
          className={'tuning-note-select'}
          defaultValue={this.state.octave} 
          name={"octave"} 
          onChange={this.handleChange}>
          {octaveOptions}
        </select>
      </form>
    )
  }
}
