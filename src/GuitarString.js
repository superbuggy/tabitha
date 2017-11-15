import React, { Component } from 'react'
import Fret from './Fret'


export default class GuitarString extends Component {
  constructor (props) {
    super(props)
    this.state = {
      frettedNoteNum: 0
    }
  }
  
  render () {
    const nutStyle = {
      background: 'rgb(248, 232, 222)',
      display: 'flex',
      minHeight: this.props.height,
      maxHeight: this.props.height
    }

    const pStyle = { 
      color: 'rgb(148, 128, 133)',
      fontFamily: 'monospace',
      fontSize: '16px',
      paddingRight: '.25em',
      paddingLeft: '1em'
    }

    let frets = [...Array(this.props.frets)].map((_, i) => <Fret height={this.props.height} width={this.props.width} />)

    return (
      <div style={nutStyle}>
        <p style={pStyle}>{this.props.rootNote}</p>
        {frets}
      </div>
    )
  }
}  
