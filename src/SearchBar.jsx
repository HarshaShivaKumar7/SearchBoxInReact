import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched products", data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.log("Error fetching:", error);
      });
  }, []);

  useEffect(() => {
    const recommended = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRecommendedProducts(recommended);
  }, [searchTerm, products]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="search-bar-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {recommendedProducts.length > 0 && (
        <div className="recommended-products-container">
          <h3>Recommended Products:</h3>
          <div className="product-list-container">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
                <p className="product-title">{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="product-list-container">
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
                <p className="product-title">{product.title}</p>
              </div>
            ))
          : products.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
                <p className="product-title">{product.title}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SearchBar;
