import React, { Component } from 'react'
import NeckContainer from './NeckContainer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
    return <NeckContainer strings={6}/>
  }
}

export default App
