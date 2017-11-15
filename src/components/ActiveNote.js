import React from 'react'

export default ({ note }) => {
  const activeNoteStyle = {
    color: 'rgb(64, 222, 64)',
    background: 'darkgrey',
    border: '1px solid black',
    padding: '.25em',
    fontFamily: 'monospace',
    minWidth: '1em'
  }
  console.log(note)
  if (note && note < 10) note = '0' + note
  return <span style={activeNoteStyle}> {note === null ? '--' : note} </span>
}
