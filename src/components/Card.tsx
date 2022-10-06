import { CardProps } from "../types";

const Card = ({ cardName, cardId, handleCardClick, type, thumbnailUrl, url}: CardProps) => {
  const isAlbum = type == 'album'
  const title = cardName.length > 15 ? cardName.substring(0, 15) + '...' : cardName
  return (
    <div className="album" onClick={() => handleCardClick(cardId)}>
      {isAlbum ? <div className="album-card">Album No.: {cardId}</div> : <img src={thumbnailUrl} />}
      <p>{title}</p>
    </div>
  );
};

export default Card;
