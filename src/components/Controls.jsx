import React from "react";
import { banks } from "../App";

function Controls({
  display,
  setSelectedBank,
  selectedBank,
  power,
  setPower,
  volume,
  setVolume,
}) {
  const handleBankClink = () => {
    if (selectedBank === banks[0]) {
      setSelectedBank(banks[1]);
    } else {
      setSelectedBank(banks[0]);
    }
  };

  const handlePowerClick = () => {
    power ? setPower(false) : setPower(true);
  };
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={handleBankClink} />
        <span className="slider round"></span>
      </label>

      <label className="switch">
        <input type="checkbox" onClick={handlePowerClick} />
        <span className="slider round"></span>
      </label>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
        }}
      />

      <span>{display}</span>
    </div>
  );
}

export default Controls;
