import React, { Component } from 'react'
import { Note } from 'tonal'

export default class TuningNote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      note: this.props.note,
      editing: false
    }
  }

  handleClick = (e) => {
    if (this.state.editing) {
      // some stuff
    }
    this.setState(_=>({editing: true}), _=> console.log(this.state))
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({editing: false})
  }

  handleChange = (e) => {
    e.persist()
    let newTonalNote = Note.from(e.target.value)
    console.log(newTonalNote, e.target.name, e.target.value)
    this.setState(_ => ({[e.target.name]: e.target.value}))
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
      display: this.state.editing ? 'none' : 'inline-block'
    }
    const inputStyle = {
      minWidth: '1em',
      maxWidth: '3em',
      minHeight: '2em',
      padding: '0',
      margin: '0',
      color: 'rgb(255, 222, 64)',
      background: 'darkgrey',
      fontFamily: 'monospace',
    }
    const formStyle = {
      display: this.state.editing ? 'block' : 'none',
      maxWidth: '3em',
      border: '0',
      margin: '0',
      padding: '0'
    }
    const containerStyle = {
      minWidth: '3em',
      maxWidth: '3em',
      marginTop: '1em',
      padding: 0
    }
    return (
      <div style={containerStyle}>
        <span onClick={this.handleClick} style={tuningNoteStyle}> 
          {this.props.note || '-'} 
        </span>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <input 
            autoFocus 
            onChange={this.handleChange} 
            type="text" 
            name="note" 
            value={this.state.note} 
            style={inputStyle} />
        </form>
      </div>
    )
  }
}
