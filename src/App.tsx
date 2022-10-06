import { useEffect, useState } from "react";
import "./App.css";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import { userData, albumData } from "./types";
import Carousal from "./components/Carousal";
import { getUserAlbums, getUserData, getUserPhotos } from "./utils";

const App = () => {
  const [userAlbums, setUserAlbums] = useState<albumData>({} as albumData);
  const [userData, setUserData] = useState<userData | null>(null);
  const [selectedAlbumPhotos, setSelectedAlbumPhotos] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [showPhotos, setShowPhotos] = useState<boolean>(false);

  // Get User Email (if present) from Local Storage
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  useEffect(() => {
    if (userEmail) {
      loginUser(userEmail);
    }
  }, [userEmail]);

  useEffect(() => {
    if (userData) {
      getAlbums();
    }
  }, [userData]);

  const loginUser = async (userEmail: string) => {
    setIsLoggedIn(true);
    const data = await getUserData(userEmail);
    setUserData(data);
  };

  const logOutUser = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserAlbums({} as albumData);
    setUserEmail(null);
    setUserData(null);
  };

  const getEmail = (email: string) => {
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
  };

  const getAlbums = async () => {
    const data = await getUserAlbums(userData?.id);
    setUserAlbums(data);
  };

  const getPhotos = async (id: String) => {
    const photos = await getUserPhotos(id);
    setSelectedAlbumPhotos(photos);
    setShowPhotos(true);
  };

  const handlePhotoClick = () => {
    console.log('clicked')
  }

  return (
    <div className="container">
      <Header isLoggedIn={isLoggedIn} handleLogOut={logOutUser} />
      {!isLoggedIn && <Search handleSearch={getEmail} />}
      {isLoggedIn && userData && !showPhotos && (
        <>
          <h2 className="username">Hello {userData.name}</h2>
          <div className="content">
            <CardsContainer
              data={userAlbums}
              handleCardClick={getPhotos}
              type='album'
            />
          </div>
        </>
      )}
      {showPhotos && selectedAlbumPhotos && (
        <>
          <h2 className="username">Hello {userData?.name}</h2>
          <Carousal data={userAlbums} handleCardClick={getPhotos}/>
          <div className="content">
            <CardsContainer
              data={selectedAlbumPhotos}
              handleCardClick={handlePhotoClick}
            />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
