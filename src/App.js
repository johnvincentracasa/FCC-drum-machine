import React, {useState} from 'react'
import './App.css';
import Keypads from './components/Keypads';
import Controls from './components/Controls'
import {bankOne, bankTwo} from './data'

export const banks = [
  bankOne,
  bankTwo
]

function App() {

  const [selectedBank, setSelectedBank] = useState(banks[0])
  const [playedSound, setPlayedSound] = useState('')

  

  // create handle select bank then pass to controls component

  return (
    <div className="App">      
      {selectedBank.map((keypad) => {
        return <Keypads keypad={keypad} setPlayedSound={setPlayedSound}/>
      })}

      <Controls selectedBank={selectedBank} setSelectedBank={setSelectedBank} playedSound={playedSound}/>
    </div>
  );
}

export default App;
