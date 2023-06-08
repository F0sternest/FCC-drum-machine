import React from "react";

function SoundBtn({ audioSample, type }) {

  const PlayAudio = () => {
    audioSample.play();
  };
  return <button onClick={PlayAudio}>{type}</button>;
}

export default SoundBtn;
