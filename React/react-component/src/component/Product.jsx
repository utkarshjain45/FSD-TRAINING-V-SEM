import React from 'react'

const Products = (props) => {
    const {image, name, price, rating} = props.productDetails;
  return (
        <div className="product-card">
          <img src={image} alt="" />
          <h3>{name}</h3>
          <div className="product-info">
            <p>{price / 100}/-</p>
            <p>{rating}</p>
            <button>Add to Cart</button>
          </div>
        </div>
  )
}

export default Products