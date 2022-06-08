import React from 'react';
// types

interface Props {
  item: CardData;
  index: number;
  handleClick: (id: number) => void;
}

interface CardData {
  id: number;
  img: string;
  stat: string | null;
}
const Card = ({ item, index, handleClick }: Props) => {
  const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div className={'card' + itemClass} onClick={() => handleClick(index)}>
      <img src={item.img} alt="" />
    </div>
  );
};

export default Card;
