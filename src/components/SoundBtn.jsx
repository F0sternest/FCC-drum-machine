import React from "react";

function SoundBtn({ audioSample }) {

  const PlayAudio = () => {
    audioSample.play();
  };
  return <button onClick={PlayAudio}>Sonido</button>;
}

export default SoundBtn;
