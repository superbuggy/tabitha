import React, { Component } from 'react'
import GuitarString from './GuitarString'

export default ({frets, strings, roots, height, ...props}) => {
  const neckStyle = {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '2px solid rgb(213, 192, 142)',
    borderBottom: '2px solid rgb(213, 192, 142)',
    margin: '0 auto'
  }
  const width = parseFloat(window.innerWidth * .75 / frets, 2)
  const stringHeight = parseFloat(height/strings, 2)
  console.log(props, roots)
  roots = roots.reverse()
  let guitarStrings = [...Array(strings)].map( (_, i) =>
    (<GuitarString 
      rootNote={roots[i]} 
      width={width} 
      frets={frets} 
      key={i} 
      height={stringHeight}
    />)
  )
  return (
    <div style={neckStyle}>
        {guitarStrings}
    </div>
  )
}



