import React from "react";

const UserCart = ({ cartCourses, deleteCourseFromCartFunction, totalAmountCalculationFunction, setCartCourses }) => {
  return (
    <div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
      <h1>My Cart</h1>
      {cartCourses.length === 0 ? (
        <p className="empty-cart">Your cart is empty!!</p>
      ) : (
        <div>
          <ul>
            {cartCourses.map((item) => (
              <li key={item.product.id} className="cart-item">
                <div className="item-info">
                  <div className="item-image">
                    <img src={item.product.image} alt={item.product.name} />
                  </div>
                  <div>
                    <h3>{item.product.name}</h3>
                    <p>Price: ${item.product.price}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button
                    className="remove-button"
                    onClick={() => deleteCourseFromCartFunction(item.product)}
                  >
                    Remove product
                  </button>
                  <div className="quantity">
                    <button
                      style={{ margin: "1%" }}
                      onClick={() => {
                        setCartCourses((prevCartCourses) => {
                          const updatedCart = prevCartCourses.map((prevItem) =>
                            prevItem.product.id === item.product.id
                              ? { ...prevItem, quantity: prevItem.quantity + 1 }
                              : prevItem
                          );
                          return updatedCart;
                        });
                      }}
                    >
                      +
                    </button>
                    <p className="quant">{item.quantity}</p>
                    <button
                      onClick={() => {
                        setCartCourses((prevCartCourses) => {
                          const updatedCart = prevCartCourses.map((prevItem) =>
                            prevItem.product.id === item.product.id
                              ? { ...prevItem, quantity: Math.max(prevItem.quantity - 1, 1) }
                              : prevItem
                          );
                          return updatedCart;
                        });
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmountCalculationFunction()}</h3>
        </div>
      )}
    </div>
  );
}

export default UserCart;
