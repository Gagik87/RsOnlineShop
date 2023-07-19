import { Navbar } from "./Components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage/HomePage";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Components/Card";
import { Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/Catalog/Catalog";
import React, { useEffect, useState } from "react";
import { data } from "./db/data";
function App() {
  const [selectedPrice, setSelectedPrice] = useState([24, 800]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [list, setList] = useState(data);
  const [resultsFound, setResultsFound] = useState(true);
  const applyFiltres = () => {
    let updateList = data;
    const handleChangePrice = (event, value) => {
      setSelectedPrice(value);
    };
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updateList = updateList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updateList);

    !updateList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFiltres();
  }, [selectedCategory, selectedPrice]);

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
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <div className="App">
      {/* <Sidebar handleChange={handleChange} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Navbar query={query} handleInputChange={handleInputChange} />
          }
        />
        <Route path="/CatalogPage" element={<Catalog />} />
      </Routes>
      {/* <Recommended handleClick={handleClick} />
      <Products result={result} /> */}
    </div>
  );
}

export default App;
