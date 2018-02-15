import React from 'react'
import './Fretboard.css'

import GuitarString from '../GuitarString/GuitarString.js'

const Fretboard = ({frets, strings, roots, minHeight, updateActiveNote, ...props}) => {

  const width = window.innerWidth
  const modifier = strings > 6 ? 6 : strings
  const stringHeight = parseFloat(minHeight / modifier, 2)
  let guitarStrings = [...Array(strings)].map( (_, i) => (
    <GuitarString
      rootNote={roots[i]}
      width={width}
      frets={frets}
      key={i}
      string={i+1}
      height={stringHeight}
      updateActiveNote={updateActiveNote}
    />
  ))
  return (
    <div className={'fretboard'} style={{minHeight}}>
      {guitarStrings}
    </div>
  )
}

export default Fretboard
