import React from 'react'
import ActiveNote from './ActiveNote'
import TuningNote from './TuningNote'
import { Note } from 'tonal'

const FretboardControls = (props) => {
  const inputStyle = {
    maxWidth: '50px',
  }

  const divStyle = {
    width: '40%',
    margin: '0 auto',
    minHeight: window.innerHeight
  }

  const containerStyle = {
    display: 'flex',
    padding: 0,
    margin: 0,
  }

  const { handleChange, tuning, frets, strings, activeNotes, updateTuning } = props

  let notes = tuning.map((rootNote, i) => (
    <TuningNote key={i} note={rootNote} string={i + 1} updateTuning={updateTuning} />
  )).reverse()

  let activeNotesList = Object.keys(activeNotes).map((note, i)=>(
    <ActiveNote key={i} root={tuning[i]} fret={activeNotes[note]} string={i + 1}/>
  )).reverse()

  const tonalNotes = Object.keys(activeNotes).map((string, i) => {
    return Note.simplify(
      Note.from({ alt: activeNotes[string] }, tuning[i])
    )
  })

  return <div style={divStyle}>
          <input 
            onChange={handleChange} 
            name="frets" 
            type="number" 
            placeholder="..." 
            value={frets} 
            style={inputStyle} />

          <input 
            onChange={handleChange} 
            name="strings" 
            type="number" 
            placeholder="..." 
            value={strings} 
            style={inputStyle} />

          <div style={containerStyle}>{notes}</div>
          <div style={containerStyle}>{activeNotesList}</div>
        </div>;
}

export default FretboardControls
