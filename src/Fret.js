import React, { Component } from 'react'

export default ({ height, width }) => {
  const style = {
    width,
    boxSizing: 'border-box',
    borderRight: '4px solid grey',
    background: 'lightgrey',
    minHeight: height,
    display: 'inline-flex',
  }
  return (
    <div style={style}>
      
    </div>
  )
}

