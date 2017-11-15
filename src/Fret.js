import React from 'react'

export default ({ height, width, fret, string, onMouseOver, onClick, highlighted, ...props}) => {
  const fretStyle = {
    width,
    boxSizing: 'border-box',
    borderRight: '4px solid rgb(156, 156, 156)',
    background: highlighted ? 'rgb(255, 201, 196)' : 'rgb(249, 221, 156)',
    minHeight: height,
    display: 'inline-flex',
  }
  const stringStyle = {
    width: '100%',
    maxHeight: '0px',
    border: '2px solid grey',
    marginTop: height / 2
  }
  let stringDiv = <div style={stringStyle}></div>
  return (
    <div 
      onMouseOver={(e) => onMouseOver(e, fret)} 
      onClick={(e) => onClick(e, fret, string)} 
      style={fretStyle}
    >
      {stringDiv}
    </div>
  )
}
