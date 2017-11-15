import React, { Component } from 'react'
import Fret from './Fret'

export default class GuitarString extends Component {
  constructor (props) {
    super(props)
    this.state = {
      highlightedAt: null,
      frettedAt: null
    }
  }

  highlight = (e, fret) => {
    this.setState( _ =>({highlightedAt: fret}))
  }
  
  fret = (e, fret, string) => {
    console.log('as')
    this.setState( _ =>({frettedAt: fret}),_=>console.log(this.state))
    this.props.addNote(e, fret, string)
    // TODO: this.props.removeNote()
  }

  render () {
    const nutStyle = {
      background: 'rgb(248, 232, 222)',
      display: 'flex',
      minHeight: this.props.height,
      maxHeight: this.props.height
    }

    const pStyle = { 
      color: this.state.highlightedAt === 0 ? 'rgb(255, 201, 196)' : 'rgb(148, 128, 133)',
      fontFamily: 'monospace',
      fontSize: '16px',
      paddingRight: '.25em',
      paddingLeft: '1em'
    }

    let frets = [...Array(this.props.frets)].map( (_, i) => 
      (<Fret
        key={i}
        string={this.props.string} 
        fret={i+1} 
        onMouseOver={this.highlight} 
        onClick={this.fret} 
        height={this.props.height} 
        width={this.props.width}
        highlighted={this.state.highlightedAt === i+1}
      />)
    )

    return (
      <div style={nutStyle}>
        <p onMouseOver={(e) => this.highlight(e, 0)} style={pStyle}>{this.props.rootNote}</p>
        {frets}
      </div>
    )
  }
}  
