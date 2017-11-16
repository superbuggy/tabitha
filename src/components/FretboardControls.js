import React from 'react'
import ActiveNote from './ActiveNote'
import TuningNote from './TuningNote'

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

  const { handleChange } = props
  const { tuning, frets, strings, activeNotes, updateTuning } = props
  console.log(props)
  let notes = tuning.slice().map((rootNote, i) => (
    <TuningNote key={i} note={rootNote} string={i + 1} updateTuning={updateTuning} />
  )).reverse()

  let activeNotesList = Object.keys(activeNotes).map((note, i)=>(
    <ActiveNote key={i} root={tuning[i]} fret={activeNotes[note]} string={i + 1}/>
  )).reverse()

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

      <div style={containerStyle}>{notes}</div>
      <div style={containerStyle}>{activeNotesList}</div>
    </div>
  )
}

export default FretboardControls
