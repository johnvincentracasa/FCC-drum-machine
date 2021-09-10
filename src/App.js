import React, {useState} from 'react'

import './App.css';
import Keypads from './components/Keypads';
import Controls from './components/Controls';
import {bankOne, bankTwo} from './data'

const banks = {
  'Heater Kit' : bankOne,
  'Smooth Piano Kit' : bankTwo
}

function App() {

  const [selectedBank, setSelectedBank] = useState(banks['Heater Kit'])


  // create handle select bank then pass to controls component

  
  return (
    <div className="App">

      <div className="keypads__container">
      {selectedBank.map( (keypad) => {
                return <Keypads keypad={keypad}/>
            })}
      </div>
      <Controls/>
      
    </div>
  );
}

export default App;
