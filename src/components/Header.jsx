import logo from "../images/header__logo.svg";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();


  React.useEffect(() => {}, [location]);
  return (
    <>
      <header className="header">
        <div className="header__container">
        <img src={logo} alt="logo Arround the US" className="header__logo" />
        {location.pathname == "/login" && (
          <Link to="/register" className="header__register-login-link">Registrate</Link>
        )}
        {location.pathname == "/register" && (
          <Link to="/login" className="header__register-login-link">Iniciar sesión</Link>
        )}
        </div>
        <div className="header__line"></div>
      </header>
    </>
  );
}

export default Header;
