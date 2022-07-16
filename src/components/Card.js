import React from "react";
import { Link } from "react-router-dom";

//card component
//destructuring props to get the data
const Card = ({id,title,price,description,image}) => {
  return (
    <div className="card">
      <img
        src={image}
        class="card--image"
        alt="..."
      />
      <div className="card__info">
        <h3 className="card__title">
          <Link to={`/products/${id}`}>{title.substring(0,50)}</Link>
        </h3>
        <p className="card__text">
          {description.substring(0, 200)}
        </p>
        <div className="card__price">
          <span className="card__price--value">${price}</span>
          <span className="card__price--currency">USD</span>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
