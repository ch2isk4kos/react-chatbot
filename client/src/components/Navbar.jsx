import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="logo">LOGO</h1>
      <div className="links">
        <a
          className="link"
          href="https://chriskakos.medium.com"
          target="_blank"
          rel="noreferrer"
        >
          MD
        </a>
        <a
          className="link"
          href="https://linkedin.com/in/chris-kakos"
          target="_blank"
          rel="noreferrer"
        >
          LI
        </a>
        <a
          className="link"
          href="https://www.github.com/ch2isk4kos"
          target="_blank"
          rel="noreferrer"
        >
          GH
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
