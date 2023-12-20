import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <section className="open-chats"></section>
      <section className="settings">
        <div className="bottom-left">
          <p className="option">Link</p>
          <p className="option">Link</p>
          <p className="option">Link</p>
        </div>
        <div className="bottom-right">
          <p className="hamburger">Link</p>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
