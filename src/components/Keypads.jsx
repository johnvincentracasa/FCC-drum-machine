import React, { useEffect, useCallback } from "react";

function Keypads({ keypad, setDisplay, power, volume }) {
  const playSound = useCallback(() => {
    if (power) {
      const soundKey = document.getElementById(keypad.keyTrigger);
      soundKey.volume = volume;
      soundKey.currentTime = 0;
      soundKey.play();
      setDisplay(keypad.id);
    }
  }, [keypad, setDisplay, power, volume]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === keypad.keyCode) {
        playSound();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [keypad, playSound]);

  return (
    <div className="keypad__container">
      <div onClick={playSound} className="keypads__btn" id={keypad.id}>
        <audio src={keypad.url} id={keypad.keyTrigger}></audio>
        {keypad.keyTrigger}
      </div>
    </div>
  );
}

export default Keypads;
