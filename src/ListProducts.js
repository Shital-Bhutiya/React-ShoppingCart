import React, { Component } from "react";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
class ListProducts extends Component {
    tempCart = [];
  addToCart(item, index) {
     if (!this.props.cart.includes(item)) {
          this.tempCart.push(item)     
    } else {
      this.props.cart.map(tempItem => {
        if (tempItem === item) {
          tempItem.quantity += 1;
        }
      });
    }
    this.props.addItemToCart(this.tempCart);
    this.tempCart = [];
    
  }
  render() {
    return (
      <div>
        <div className="menu">
          <h1>Welcome to Mini Amazon</h1>
          <span>
            <Link to="/cart">
              {this.props.cart.length}Your Cart<ShoppingCart
                style={{ fontSize: 70 }}
              />
            </Link>
          </span>
        </div>
        <ul className="container">
          {this.props.products.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <img src={item.url} alt={item.name} />
              <p>${item.price}</p>
              <p>{item.description}</p>

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.addToCart(item);
                }}
              >
                Add to Cart
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListProducts;
