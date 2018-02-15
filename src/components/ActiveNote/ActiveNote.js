import React from 'react'
import './ActiveNote.css'
import { Note } from 'tonal'

const ActiveNote = ({ fret, root, ...props }) => {
  const tonalNote = Note.simplify(Note.from({ alt: fret }, root))
  if (fret && fret < 10) fret = '0' + fret
  return <span className="fret"> {fret === null ? '--' : tonalNote} </span>
}

export default ActiveNote
