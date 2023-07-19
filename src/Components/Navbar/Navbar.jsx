import "./Navbar.scss";
import logo from "../../img/logo.png";
import menu from "../../img/menu.png";
import close from "../../img/close.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";

export const Navbar = ({ handleInputChange, query }) => {
  const [menuActive, setActive] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/CatalogPage");
  };
  const handleClick2 = () => {
    navigate("/");
  };
  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <div className="NavbarTitle">
          <div className="NavbarContent">
            <div className="NavbarLogo">
              <img onClick={handleClick2} src={logo} alt="logo" />
            </div>
            <div className="NavbarText">
              <a onClick={handleClick} href="/CatalogPage">
                Каталог
              </a>
              <a href="#">Отзывы</a>
              <a href="#">Контакты</a>
            </div>
            <div className="NavbarContact">
              <p>+375 29 635–33–63</p>
            </div>
            <div className="NavbarSearch">
              <input type="text" onChange={handleInputChange} value={query} />
            </div>
            <div className="menuClose">
              <img
                className={!menuActive ? "menu" : "hide_menu"}
                onClick={() => setActive(true)}
                src={menu}
                alt="menu"
              />
              <img
                className={menuActive ? "close" : "hide_close"}
                onClick={() => setActive(false)}
                src={close}
                alt="close"
              />
            </div>
            <div
              onClick={() => setActive(false)}
              className={menuActive ? "menuBar NavBarItems" : "closeMenu"}
            >
              <a onClick={handleClick} href="#">
                Каталог
              </a>
              <a href="#">Отзывы</a>
              <a href="#">Контакты</a>
            </div>
          </div>
        </div>
      </div>
      <HomePage />
    </div>
  );
};
