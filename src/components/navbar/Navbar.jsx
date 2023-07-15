import logo from "../../helper/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>
      <div className="links">
        <a href="#wonders">Wonders</a>
        <a href="#countries">Countries</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
