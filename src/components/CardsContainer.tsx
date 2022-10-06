import { CardsContainerProps } from "../types";
import Card from "./Card";

const CardsContainer = ({
  data,
  handleCardClick,
  type
}: CardsContainerProps) => {
  const isPhoto = type !== 'album'
  return (
    <div className="album-container">
      {Object.values(data).map((item) => (
        <Card
          key={item.id}
          cardName={item.title}
          cardId={item.id}
          thumbnailUrl={isPhoto && item.thumbnailUrl}
          url={isPhoto && item.url}
          handleCardClick={handleCardClick}
          type={type}
        />
      ))}
    </div>
  );
};
export default CardsContainer;
