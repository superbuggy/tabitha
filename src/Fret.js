import React, { Component } from 'react'

export default ({ height, width }) => {
  const style = {
    width,
    boxSizing: 'border-box',
    borderRight: '4px solid rgb(156, 156, 156)',
    background: 'rgb(249, 221, 156)',
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
    <div style={style}>
      {stringDiv}
    </div>
  )
}

