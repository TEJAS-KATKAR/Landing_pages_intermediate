import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Elementum</h1>

      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>

      <button className="navbar-menu">
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;