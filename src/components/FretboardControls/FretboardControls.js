import React from 'react'
  import './FretboardControls.css'
import ActiveNote from '../ActiveNote/ActiveNote'
import TuningNote from '../TuningNote/TuningNote'
import { Note } from 'tonal'

const FretboardControls = ({ 
  handleChange,
   tuning,
   frets,
   strings,
   activeNotes,
   updateTuning,
   ...props }) => {

  let TuningNotes = tuning.map((rootNote, i) => (
    <TuningNote 
      key={i} 
      note={rootNote} 
      string={i + 1} 
      updateTuning={updateTuning} 
    />
  )).reverse()

  let ActiveNotes = Object.keys(activeNotes).map((note, i) => (
    <ActiveNote 
      key={i} 
      root={tuning[i]} 
      fret={activeNotes[note]} 
      string={i + 1} 
    />
  )).reverse()

  return (
    <div className="container">
      <form>
        <input 
          onChange={handleChange} 
          name="frets" 
          type="number" 
          placeholder="..." 
          value={frets} 
        />

        <input 
          onChange={handleChange} 
          name="strings" 
          type="number" 
          placeholder="..." 
          value={strings} 
        />
      </form>

      <div className="control-container">
        {TuningNotes}
      </div>

      <div className="control-container">
        {ActiveNotes}
      </div>
    </div>
  )
}

export default FretboardControls
