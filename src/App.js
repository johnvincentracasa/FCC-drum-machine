import React, { useState } from "react";
import "./App.css";
import Keypads from "./components/Keypads";
import Controls from "./components/Controls";
import { bankOne, bankTwo } from "./data";

export const banks = [bankOne, bankTwo];

function App() {
  const [power, setPower] = useState(true);
  const [selectedBank, setSelectedBank] = useState(banks[0]);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.3);

  // create handle select bank then pass to controls component

  return (
    <div className="App" id="drum-machine">
      <div className="keypads_container">
        {selectedBank.map((keypad) => {
          return (
            <Keypads
              keypad={keypad}
              setDisplay={setDisplay}
              power={power}
              volume={volume}
              key={keypad.id}
            />
          );
        })}
      </div>

      <Controls
        selectedBank={selectedBank}
        setSelectedBank={setSelectedBank}
        display={display}
        power={power}
        setPower={setPower}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
}

export default App;
