import React from 'react'
import ActiveNote from './ActiveNote'
import TuningNote from './ActiveNote'

export default (props) => {
  const inputStyle = {
    maxWidth: '50px',
  }

  const divStyle = {
    width: '40%',
    margin: '0 auto',
  }

  const { handleChange } = props
  const { tuning, frets, strings, activeNotes } = props

  let notes = tuning.slice().reverse().map((rootNote, i) => (
    <TuningNote key={i} note={rootNote}/>
  ))

  let activeNotesList = Object.keys(activeNotes).map((note, i)=>(
    <ActiveNote key={i} note={activeNotes[note]}/>
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
