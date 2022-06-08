import React, { useState, useRef, useEffect } from 'react';
import PlayerControls from './playerControls';
import PlayerDetails from './playerDetails';
//Types
export interface Props {
  currentSongIndex: number;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  nextSongIndex: number;
  songs: SongDetail[];
}

export interface SongDetail {
  title: string;
  artist: string;
  img_src: string | undefined;
  src: string | undefined;
}
const Player = (props: Props) => {
  const audioEl = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current?.play();
    } else {
      audioEl.current?.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className="music__container col-md-10">
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <h4>Playing now</h4>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>Next up: </strong> {props.songs[props.nextSongIndex].title} by
      </p>
    </div>
  );
};

export default Player;
