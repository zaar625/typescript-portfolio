import React from 'react';
import {
  AiOutlineFastBackward,
  AiOutlineFastForward,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from 'react-icons/ai';

//Types
interface Props {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  SkipSong: (value: boolean) => void;
}

const PlayerControls = (props: Props) => {
  return (
    <div className="music__controls">
      <button
        className="music__controls__skip-btn"
        onClick={() => props.SkipSong(false)}
      >
        <AiOutlineFastBackward />
      </button>
      <button
        className="music__controls__play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
      </button>
      <button
        className="music__controls__skip-btn"
        onClick={() => props.SkipSong(true)}
      >
        <AiOutlineFastForward />
      </button>
    </div>
  );
};

export default PlayerControls;
