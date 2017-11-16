import React from 'react'
import GuitarString from './GuitarString'

const Fretboard = ({frets, strings, roots, minHeight, updateActiveNote, ...props}) => {
  const neckStyle = {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '2px solid rgb(213, 192, 142)',
    borderBottom: '2px solid rgb(213, 192, 142)',
    margin: '0 auto',
    minHeight,
    maxHeight: '320px'
  }
  const width = window.innerWidth
  const modifier = strings > 6 ? 6 : strings
  const stringHeight = parseFloat(minHeight/modifier, 2)
  let guitarStrings = [...Array(strings)].map( (_, i) =>
    (<GuitarString 
      rootNote={roots[i]} 
      width={width} 
      frets={frets} 
      key={i} 
      string={i+1} 
      height={stringHeight}
      updateActiveNote={updateActiveNote}
    />)
  )
  return (
    <div style={neckStyle}>
        {guitarStrings}
    </div>
  )
}

export default Fretboard