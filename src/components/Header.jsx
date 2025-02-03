import logo from "../images/header__logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
        <img src={logo} alt="logo Arround the US" className="header__logo" />
        <Link to="register" className="header__register-login-link">
          Registrate
        </Link>
        </div>
        <div className="header__line"></div>
      </header>
    </>
  );
}

export default Header;
