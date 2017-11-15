import React from 'react'

export default ({ note }) => {
  const activeNoteStyle = {
    color: 'rgb(64, 222, 64)',
    background: 'darkgrey',
    border: '1px solid black',
    marginTop: '1em',
    padding: '.25em',
    fontFamily: 'monospace'
  }

  return <span style={activeNoteStyle}> {note === null ? '-' : note} </span>
}
