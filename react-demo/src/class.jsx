
import React, { Component } from "react";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [
        { id: 1, name: "Item 1", price: 10 },
        { id: 2, name: "Item 2", price: 20 },
      ],
    };
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
