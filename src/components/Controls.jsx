import React from "react";
import { banks } from "../App";

function Controls({
  display,
  setSelectedBank,
  selectedBank,
  setDisplay,
  power,
  setPower,
  volume,
  setVolume,
}) {
  const handleBankClink = () => {
    if (selectedBank === banks[0]) {
      setSelectedBank(banks[1]);
      setDisplay("Bank 2");
    } else {
      setSelectedBank(banks[0]);
      setDisplay("Bank 1");
    }
  };

  const handlePowerClick = () => {
    if (power) {
      setPower(false);
      setDisplay("Off");
    } else {
      setPower(true);
      setDisplay("On");
    }
  };
  return (
    <div className="controls_container">
      <label className="switch">
        <input type="checkbox" onClick={handlePowerClick} />
        <span className="slider round"></span>
      </label>

      <span
        id="display"
        style={{
          background: "rgb(191, 168, 212)",
          padding: "10px 20px",
          borderRadius: "5px",
          width: "6rem",
          textAlign: "center",
        }}
      >
        {display}
      </span>

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
