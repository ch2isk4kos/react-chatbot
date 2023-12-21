import "../styles/sidebar.css";

const Sidebar = () => {
  const handleOnNewChat = (e) => {
    e.preventDefault();
    console.log("we have a click!");
  };
  return (
    <div className="Sidebar">
      <div className="open-chats">
        <div className="chat" onClick={(e) => handleOnNewChat(e)}></div>
      </div>
      <div className="settings">
        <div className="bottom-left">
          <p className="option">Link</p>
          <p className="option">Link</p>
          <p className="option">Link</p>
        </div>
        <div className="bottom-right">
          <p className="hamburger">Link</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
