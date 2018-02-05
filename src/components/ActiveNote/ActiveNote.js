import React from 'react'
import './ActiveNote.css'
import { Note } from 'tonal'

const ActiveNote = ({ fret, root, ...props }) => {

  const tonalNote = Note.simplify(Note.from({ alt: fret }, root))
  // console.log(tonalNote)
  if (fret && fret < 10) fret = '0' + fret
  return <span> {fret === null ? '--' : tonalNote} </span>
}

export default ActiveNote
