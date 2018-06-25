import React, { Component } from "react";
import "./App.css";
import ListProducts from "./ListProducts";
import Cart from "./Cart";
import { Route } from "react-router-dom";
class App extends Component {
  state = {
    products: [
      {
        price: 200,
        description:
          "A furniture set consisting of a sofa with two matching chairs is known as a chesterfield suite or living room suite.",
        name: "Pearce leather sofa",
        url:
          "https://www.potterybarn.com/pbimgs/ab/images/dp/wcm/201810/0032/pearce-leather-sofa-c.jpg",
        quantity: 1
      },
      {
        price: 300,
        description:
          "Footwear intended to protect and comfort the human foot while the wearer is doing various activities",
        name: "adidas JS Wings Gold Men's Shoes",
        url:
          "https://images-na.ssl-images-amazon.com/images/I/81y%2Bd1i9sqL._UL1500_.jpg",
        quantity: 1
      },
      {
        price: 400,
        description:
          "Diamond and Garnet Necklace A necklace is an article of jewelry that is worn around the neck.",
        name: "Napier Twotone Circle  Necklace",
        url:
          "https://images-na.ssl-images-amazon.com/images/I/81Kd9SqT%2BiL._UY675_.jpg",
        quantity: 1
      },
      {
        price: 500,
        description:
          "The lenses of polarized sunglasses reduce glare reflected at some angles off shiny non-metallic surfaces, such as water",
        name: "Calvin Klein Women's Sunglasses",
        url:
          "https://images-na.ssl-images-amazon.com/images/I/71FHLIWcP0L._UX679_.jpg",
        quantity: 1
      },
      {
        price: 11500,
        description:
          "The American multinational corporation created MacBook computers when it consolidated its PowerBook and iBook lines.",
        name: "New Macbook Pink",
        url:
          "https://cdn2.macworld.co.uk/cmsdata/features/3465239/new_macbook__pink_95.jpg",
        quantity: 1
      }
    ],
    cart: []
  };
  addItemToCart = cart => {
    this.setState(state => ({
      cart: state.cart.concat(cart)
    }));
  };
  removeItemFromCart = (item, index) => {
    const newCart = [...this.state.cart];
    newCart[index].quantity = 1;
    newCart.splice(index, 1);
    this.setState(state => ({
      cart: newCart
    }));
  };
  increaseQuantity = (index) => {
    const newCart = [...this.state.cart];
    console.log(newCart,index);
    newCart[index].quantity += 1;
    this.setState(state => ({
      cart: newCart
    }));
  };
  decreaseQuantity = (index) => {
    const newCart = [...this.state.cart];
    if (newCart[index].quantity > 1) newCart[index].quantity -= 1;
    this.setState(state => ({
      cart: newCart
    }));
  };
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <ListProducts
              setItem={this.setItem}
              products={this.state.products}
              cart={this.state.cart}
              addItemToCart={this.addItemToCart}
            />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              setItem={this.setItem}
              cart={this.state.cart}
              removeItemFromCart={this.removeItemFromCart}
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
