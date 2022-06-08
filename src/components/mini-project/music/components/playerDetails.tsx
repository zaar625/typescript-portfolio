import React from 'react';
import { SongDetail } from './Player';

interface Props {
  song: SongDetail;
}

const PlayerDetails = ({ song }: Props) => {
  return (
    <div className="music__details">
      <div className="music__details__img">
        <img src={song.img_src} alt="" />
      </div>
      <h3 className="music__details__title">{song.title}</h3>
      <h4 className="music__details__artist">{song.artist}</h4>
    </div>
  );
};

export default PlayerDetails;
