import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="logo">LOGO</h1>
      <ul>
        <li className="link">
          <a
            href="https://chriskakos.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            MD
          </a>
        </li>
        <li className="link">
          <a
            href="https://linkedin.com/in/chris-kakos"
            target="_blank"
            rel="noreferrer"
          >
            LI
          </a>
        </li>
        <li className="link">
          <a
            href="https://www.github.com/ch2isk4kos"
            target="_blank"
            rel="noreferrer"
          >
            GH
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
