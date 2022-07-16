import React from "react";
import { Link } from "react-router-dom";

//creating navbar component
const Navbar = () => {
  return (
    //using Link to render the different components
    <nav className="nav">
        <h1 className="nav__title"> FakeShop </h1>
        <span>
            <Link to="/"><h1 className="nav__link">Home</h1></Link>
            <Link to="/products"><h1 className="nav__link">Products</h1></Link>
            <Link to="/about"><h1 className="nav__link">About</h1></Link>
            
        </span>
    </nav>
  );
};

export default Navbar;
