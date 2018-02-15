import React, { Component } from 'react'
import Fret from '../Fret/Fret'
import './GuitarString.css'

export default class GuitarString extends Component {
  constructor (props) {
    super(props)
    this.state = {
      highlightedAt: null,
      frettedAt: null
    }
  }

  highlight = (e, fret) => this.setState( _ => ({highlightedAt: fret}) )

  clearHighlight = () => this.setState( _ => ({highlightedAt: null}) )

  fret = (e, fret, string) => {
    this.setState( prevState => {
      const newFret = fret === prevState.frettedAt ? null : fret
      this.props.updateActiveNote(e, fret, string)
      return {frettedAt: newFret}
    })
    //TODO: add update
  }

  render () {
    const nutStyle = {
      background: 'rgb(248, 232, 222)',
      display: 'flex',
      minHeight: this.props.height,
      maxHeight: this.props.height,
    }

    const pStyle = {
      color: this.state.highlightedAt === 0
        ? 'rgb(255, 201, 196)'
        : this.state.frettedAt === 0 
          ? 'rgb(249, 67, 67)'
          : 'rgb(148, 128, 133)'
    }
    const fretWidth = parseFloat(this.props.width * .75 / this.props.frets, 2)

    const fretList = [...Array(this.props.frets)].map( (_, i) => (
      <Fret
        key={i}
        string={this.props.string}
        fret={i+1}
        onMouseOver={this.highlight}
        onClick={this.fret}
        height={this.props.height}
        width={fretWidth}
        highlighted={this.state.highlightedAt === i+1}
        active={this.state.frettedAt === i+1}
      />
    ))
    return (
      <div style={nutStyle} onMouseOut={this.clearHighlight}>
        <p
          className={'nut'}
          onMouseOver={(e) => this.highlight(e, 0)}
          onClick={(e) => this.fret(e, 0, this.props.string)}
          style={pStyle}>
            {this.props.rootNote}
        </p>
        {fretList}
      </div>
    )
  }
}
