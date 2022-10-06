import { PhotoProps } from "../types";

const Photo = ({ photoId, photoName, handlePhotoClick }: PhotoProps) => {
  return (
    <div className="album" onClick={() => handlePhotoClick(photoId)}>
      <div className="album-card">{photoId}</div>
      <p>{photoName}</p>
    </div>
  );
};

export default Photo;
