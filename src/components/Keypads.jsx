import React, { useEffect, useCallback, useState } from "react";

function Keypads({ keypad, setPlayedSound }) {
  const playSound = useCallback(() => {
    const soundKey = document.getElementById(keypad.keyTrigger);
    soundKey.currentTime = 0;
    soundKey.play();
    setPlayedSound(keypad.id);
  }, [keypad, setPlayedSound]);

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
