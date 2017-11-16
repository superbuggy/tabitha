import React from 'react'
import { Note } from 'tonal'

const ActiveNote = ({ fret, root, ...props }) => {
  const activefretStyle = {
    color: 'rgb(64, 222, 64)',
    background: 'darkgrey',
    border: '1px solid black',
    padding: '.25em',
    fontFamily: 'monospace',
    minWidth: '3em'
  }
  const tonalNote = Note.simplify(Note.from({ alt: fret }, root))
  console.log(tonalNote)
  if (fret && fret < 10) fret = '0' + fret
  return <span style={activefretStyle}> {fret === null ? '--' : tonalNote} </span>
}

export default ActiveNote
