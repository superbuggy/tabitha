import React, { Component } from 'react'
import GuitarString from './GuitarString'

export default ({frets, strings, ...props}) => {
  const neckStyle = {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    border: '5px solid black',
    minHeight: '50px',
    margin: '0 auto'
  }

  const fretStyle = {
    position: 'relative',
    top: 0,
    left: 0
  }

  const stringStyle = {
    position: 'relative',
    top: 0,
    left: 0
  }

  const width = parseFloat(window.innerWidth * .75 / frets, 2)
  console.log(props)
  let guitarStrings = [...Array(strings)].map((_, i)=><GuitarString width={width} frets={frets} key={i} height={42}/>)
  return (
    <div style={neckStyle}>
      <div style={stringStyle}>
        {guitarStrings}
      </div>
    </div>
  )
}



