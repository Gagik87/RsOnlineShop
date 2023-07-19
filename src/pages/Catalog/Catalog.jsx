import "./Catalog.scss";
import React, { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import menu from "../../img/menu.png";
import close from "../../img/close.png";
import { useNavigate } from "react-router-dom";
import Products from "../../Products/Products";
import products from "../../db/data";
import Recommended from "../../Recommended/Recommended";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../../Components/Card";
import Price from "../../Sidebar/Price/Price";
import { data } from "../../db/data";

export const Catalog = () => {
  const [menuActive, setActive] = useState(false);
  const navigate = useNavigate();
  const [selectedPrice, setSelectedPrice] = useState([24, 800]);
  const handleClick3 = () => {
    navigate("/CatalogPage");
  };
  const handleClick2 = () => {
    navigate("/");
  };
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [list, setList] = useState(data);
  const [resultsFound, setResultsFound] = useState(true);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice, id, price }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          id={id}
          price={price}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <div className="NavbarTitle">
          <div className="NavbarContent">
            <div className="NavbarLogo">
              <img onClick={handleClick2} src={logo} alt="logo" />
            </div>
            <div className="NavbarText">
              <a onClick={handleClick3} href="/CatalogPage">
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
              <a href="#">Каталог</a>
              <a href="#">Отзывы</a>
              <a href="#">Контакты</a>
            </div>
          </div>
        </div>
      </div>
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};
