import React, { Component } from 'react'
import { Note } from 'tonal'

export default class TuningNote extends Component {
  constructor (props) {
    super(props)
    console.log(Note.from({alt:0}, this.props.note), this.props.note)
    this.state = {
      note: Note.from({ alt: 0 }, Note.simplify(this.props.note)) || `!!${this.props.note}`,
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
    e.persist()
    this.setState(prevState=>({
      editing: false,
      note: Note.from({ alt: 0 }, Note.simplify(prevState.note))// || `!${prevState.note}`
    }), _ => this.props.updateTuning(e, this.props.string - 1, this.state.note))
  }

  handleChange = (e) => {
    e.persist()
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
