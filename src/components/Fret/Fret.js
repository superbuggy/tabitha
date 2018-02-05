import React from 'react'

export default ({ 
  height,
   width,
   fret,
   string,
   onMouseOver,
   onClick,
   highlighted,
   active,
   ...props}) => {
  const backgrounds = {
    highlighted: 'rgb(255, 201, 196)',
    default: 'rgb(249, 221, 156)',
    active: 'rgb(249, 67, 67)'
  } 
  let background = (active && backgrounds.active)
                   || (highlighted && backgrounds.highlighted)
                   || backgrounds.default

  const fretStyle = {
    width,
    boxSizing: 'border-box',
    borderRight: '4px solid rgb(156, 156, 156)',
    background,
    minHeight: height,
    display: 'inline-flex',
  }
  const stringCellStyle = {
    width: '100%',
    maxHeight: '0px',
    border: '2px solid grey',
    marginTop: height / 2
  }

  const handleMouseOver = (e) => onMouseOver(e, fret)
  const handleClick = (e) => onClick(e, fret, string)
  return (
    <div 
      onMouseOver={handleMouseOver}
      onClick={handleClick}
      style={fretStyle}
    >
      <div style={stringCellStyle}></div>
    </div>
  )
}
