import React from 'react'

export default (props) => {
  const inputStyle = {
    maxWidth: '50px',
  }

  const divStyle = {
    width: '40%',
    margin: '0 auto'
  }

  const noteStyle = {
    color: 'rgb(255, 222, 132)',
    background: 'darkgrey',
    border: '1px solid black',
    marginTop: '1em',
    padding: '.25em',
    fontFamily: 'monospace'
  }

  const { handleChange } = props
  const { tuning, frets, strings, activeNotes } = props

  let notes = tuning.slice().reverse().map((rootNote, i) => (
    <span key={i} style={noteStyle}>
      {rootNote}
    </span>
  ))

  let activeNotesList = Object.keys(activeNotes).map((note, i)=>(
    <span key={i}>
      {activeNotes[note]}
    </span>
  ))
  return (
    <div style={divStyle}>
      <input
        onChange={handleChange}
        name="frets"
        type="number"
        placeholder="..."
        value={frets}
        style={inputStyle}
        />

      <input
        onChange={handleChange}
        name="strings"
        type="number"
        placeholder="..."
        value={strings}
        style={inputStyle}
        />

        <div>{notes}</div>
        <div>{activeNotesList}</div>
    </div>
  )
}
