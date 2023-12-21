import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleOnNewChat = (e) => {
    e.preventDefault();
    console.log("we have a click!");
  };

  const handleOnMenu = () => {
    setIsActive(!isActive);
  };

  const handleOnHideMenu = () => {
    setIsActive(true);
  };

  return (
    <>
      {isActive ? (
        <div className="Sidebar">
          <div className="open-chats">
            <div className="chat" onClick={(e) => handleOnNewChat(e)}></div>
          </div>
          <div className="settings">
            <div className="bottom-left">
              <a className="option">
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              </a>
              <a className="option">
                <FontAwesomeIcon icon="fa-solid fa-minus" />
              </a>
              <a className="option">
                <FontAwesomeIcon icon="fa-solid fa-gear" />
              </a>
            </div>
            <div className="bottom-right">
              <a className="hamburger" onClick={handleOnMenu}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="hamburger-menu">
          <div className="top">
            <a className="close-btn" onClick={handleOnHideMenu}>
              <FontAwesomeIcon icon="fa-solid fa-x" />
            </a>
            <h1>Menu</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
