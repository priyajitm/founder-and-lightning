import { MouseEvent, useState } from "react";
import { headerProps } from "../types";

const Header = ({ isLoggedIn, handleLogOut }: headerProps) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleMobLogOut = () => {
    setShowDropDown(false);
    handleLogOut;
  };

  return (
    <>
      <div className="navigation">
        <span className="logo-name">MyPhotoApp</span>
        <div className="mob-nav">
          <i
            className="fa-solid fa-bars"
            onClick={() => setShowDropDown(!showDropDown)}
          ></i>
          <i className="fa-solid fa-circle-half-stroke"></i>
        </div>
        <div className="nav">
          <span className="menu-item">About</span>
          <i className="fa-solid fa-circle-half-stroke"></i>
          {isLoggedIn && <button onClick={handleLogOut}>Logout</button>}
        </div>
      </div>
      {showDropDown && (
        <div className="mob-dropdown">
          <ul>
            <li>About</li>
            <li onClick={handleMobLogOut}>Logout</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
