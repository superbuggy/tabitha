import React, { Component } from 'react'

export default ({note}) => {
  const tuningStyle = {
    color: 'rgb(64, 222, 64)',
    background: 'darkgrey',
    border: '1px solid black',
    marginTop: '1em',
    padding: '.25em',
    fontFamily: 'monospace'
  }
  return (
    <span style={tuningStyle}> {note} </span>
  )
}
