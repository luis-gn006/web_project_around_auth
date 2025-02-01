import logo from "../images/header__logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo Arround the US" className="header__logo" />
        <div className="header__line"></div>
      </header>
    </>
  );
}

export default Header;
