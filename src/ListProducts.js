import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ListProducts extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <h1>Black watches</h1>
          <span>
            <Link to="/cart">
               <FontAwesomeIcon icon="shopping-cart" /><span>{this.props.cart.length}</span>
            </Link>
          </span>
        </div>
        <ul className="container">
          {this.props.products.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <img src={item.url} alt={item.name} />
              <p>${item.price}</p>

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.props.addItemToCart(item, index);
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
