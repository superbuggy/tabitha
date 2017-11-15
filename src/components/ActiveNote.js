import React, { Component } from 'react'

export default class ActiveNote extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const activeNoteStyle = {
      color: 'rgb(255, 222, 132)',
      background: 'darkgrey',
      border: '1px solid black',
      marginTop: '1em',
      padding: '.25em',
      fontFamily: 'monospace'
    }
    return (
      <span style={activeNoteStyle}> {this.props.note} </span>
    )
  }
}