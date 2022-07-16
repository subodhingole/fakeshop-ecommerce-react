import React from "react";
import { useParams } from "react-router-dom"; //importing the useParams hook from react-router-dom
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'; //importing the Rating component from the Rating.js file


const ProductDetails = ({data}) => {
  const { id } = useParams();
  const { title, price, description, image, rating, category } = data[id-1];
  const {rate,count} = rating;
  return (
    <div className="desc">
      <div className="desc__img">
        <img src={image} alt="..." />
        <div>
          <h1 className="certified">FakeShop Certified Product</h1>
          <h1 className="certified">100% Real Fake</h1>
        </div>
        <h1 className="desc__img--price">
          ${price}
          <span className="taxes">All Taxes Incl.</span>
        </h1>
      </div>
      <div className="desc__info">
        <h1 className="desc__info--title">{title}</h1>
        <h4 className="desc__info--category">Category : {category}</h4>
        <p className="desc__info--text">{description}</p>
        <span><Rating initialValue={rate} /><p className="desc__info--rating">({count})</p></span>
        <div className="desc__info--buttons">
          <Link to="/products/{id}">
            <button className="desc__info--button">Buy Now</button>
          </Link>
          <Link to="/products">
            <button className="desc__info--button">Back to Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
