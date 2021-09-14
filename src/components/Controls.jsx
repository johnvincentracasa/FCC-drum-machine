import React from "react";
import { banks } from "../App";

function Controls({ playedSound, setSelectedBank, selectedBank }) {
  const handleClick = () => {
    if (selectedBank === banks[0]) {
      setSelectedBank(banks[1]);
    } else {
      setSelectedBank(banks[0]);
    }
  };
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={handleClick} />
        <span className="slider round"></span>
      </label>

      <span>{playedSound}</span>
    </div>
  );
}

export default Controls;
