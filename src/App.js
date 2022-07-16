//importing libraries and components

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { React, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/Home";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

function App() {
  //using useState to set the initial state of the products
  const [products, setProducts] = useState([]);

  //using useEffect to fetch data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    //using Routes to render the different components
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products data={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails data={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
