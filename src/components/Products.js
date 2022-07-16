import React from 'react'
import Card from './Card'
//importing the Card component from the Card.js file


//creating a component called Products
const Products = ({data}) => {
  console.log(data);
  return (
    //using map to loop through the data and render the cards
    <div className="products">
        {data.map((product) => (
            <Card key={product.name} {...product} />
        ))}

    </div>
  );
}

export default Products