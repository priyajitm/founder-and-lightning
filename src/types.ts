import { MouseEventHandler } from "react";

export interface headerProps {
    isLoggedIn: boolean,
    handleLogOut: MouseEventHandler
}

export interface userData {
    id: String;
    name: String;
  }

  export interface albumData {
    userId: String;
    id: String;
    title: String;
  }

export interface PhotoProps {
    photoId: String, 
    photoName: String, 
    handlePhotoClick: Function
}

export interface searchProps {
    handleSearch: Function
}

export interface CardsContainerProps {
    data : cardData,
    handleCardClick: Function,
    type?: string
}

export interface cardData {
    userId: String,
    id: String,
    title: String
}

export interface CardProps {
    cardName: String,
    cardId: String,
    handleCardClick: Function,
    type?: string, 
    thumbnailUrl?: string, 
    url?: string
}

export interface CarousalProps {
    data : cardData,
    handleCardClick: Function
}