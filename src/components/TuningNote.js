import React, { Component } from 'react'

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
    this.setState({editing: !this.state.editing})
  }

  handleChange = (e) => {
    this.setState(_ => ({[e.target.name]: e.target.value}))
  }

  render() {
    const tuningNoteStyle = {
      color: 'rgb(255, 222, 64)',
      background: 'darkgrey',
      border: '1px solid black',
      marginTop: '1em',
      padding: '.25em',
      fontFamily: 'monospace'
    }
    let display = <span onClick={this.handleClick} style={tuningNoteStyle}> {this.props.note || '-'} </span>
    const inputStyle = {
      maxWidth: '2em',
      maxHeight: '2em',
      padding: 0,
      margin: 0,
      color: 'rgb(255, 222, 64)',
      background: 'darkgrey',
      fontFamily: 'monospace'
    }
    let input = <input onClick={this.handleClick} onChange={this.handleChange} type="text" name="note" value={this.state.note} style={inputStyle}/>
    return this.state.editing ? input : display
  }
}
