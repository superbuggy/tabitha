import React, { Component } from 'react'

export default class TuningNote extends Component {
  constructor(props) {
    super(props)
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
    return (
      <span style={tuningNoteStyle}> {this.props.note || '-'} </span>
    )
  }
}