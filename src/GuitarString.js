import React, { Component } from 'react'
import Fret from './Fret'


export default class GuitarString extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    const style = {
      boxSizing: 'border-box',
      border: '1px solid grey',
      background: 'lightgrey',
      display: 'flex',
      minHeight: this.props.height,
    }
    let frets = [...Array(this.props.frets)].map((_, i) => <Fret height={50} width={this.props.width} />)

    return (
      <div style={style}>
        {frets}
      </div>
    )
  }

}  
