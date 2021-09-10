import React, { useEffect, useCallback } from "react";

function Keypads({ keypad }) {
  let letter = keypad.keyCode;

  const playSound = useCallback(() => {
    const soundKey = document.getElementById(keypad.keyTrigger);
    soundKey.currentTime = 0;
    soundKey.play();
  }, [keypad]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === letter) {
        playSound();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [letter, playSound]);

  return (
    <div onClick={playSound} className="keypads__btn" id={keypad.id}>
      <audio src={keypad.url} id={keypad.keyTrigger}></audio>
      {keypad.keyTrigger}
    </div>
  );
}

export default Keypads;
