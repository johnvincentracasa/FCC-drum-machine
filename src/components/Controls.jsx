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
    <div className="controls_container">
      <label className="switch">
        <input type="checkbox" onClick={handlePowerClick} />
        <span className="slider round"></span>
      </label>

      <span id="display">{display}</span>

      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
        }}
      />

      <label className="switch">
        <input type="checkbox" onClick={handleBankClink} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Controls;
