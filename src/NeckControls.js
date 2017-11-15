import React, { Component } from 'react'

export default class NeckControls extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tuning: this.props.tuning,
      frets: this.props.frets,
      chord: null,

    }
  }
  render () {
    return (
      <div>
        <input type="text" placeholder="..." value={this.props.tuning}/>
        <input type="number" placeholder="..." value={this.props.frets}/>
        <input type="number" placeholder="..." value={this.props.strings}/>
      </div>
    )
  }
}