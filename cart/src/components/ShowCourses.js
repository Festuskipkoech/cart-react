import React from "react";

const ShowCourses = ({ courses, addCourseToCartFunction }) => {
  return (
    <div className="product-list">
      {courses.length === 0 ? (
        <p className="no-result">Sorry!! No matching result!</p>
      ) : (
        courses.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button className="add-to-cart-button" onClick={() => addCourseToCartFunction(product)}>Add to cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ShowCourses;
