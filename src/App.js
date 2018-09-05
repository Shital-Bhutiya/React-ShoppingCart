import React, { Component } from "react";
import "./App.css";
import ListProducts from "./ListProducts";
import Cart from "./Cart";
import { Route } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.products = [
      {
        price: 200,
        name: "Rolex",
        url:"https://www.lynkershop.com/wp-content/uploads/2018/01/montre-cadre-brillant3.jpg",
        quantity: 1
      },
      {
        price: 300,
        name: "Rado",
        url:"https://ae01.alicdn.com/kf/HTB17PcaQFXXXXXMXXXXq6xXFXXXx/Woman-Watches-2018-Fashion-Luxury-Gold-Bracelet-Dress-Wrist-Watch-Unique-Rectangular-Black-Women-Watch-Clock.jpg_640x640.jpg",
        quantity: 1
      },
      {
        price: 400,
        name: "Breitling",
        url:"https://www.dhresource.com/0x0s/f2-albu-g5-M01-2F-B4-rBVaJFkmQoeAZ0vKAAJls6TPu7k751.jpg/gimto-simple-fashion-weave-stainless-steel.jpg",
        quantity: 1
      },
      {
        price: 500,
        name: "Alpina",
        url:"http://www.hispatronic.com/59-thickbox_default/reloj-pulsera-vintage-de-cuero.jpg",
        quantity: 1
      },
      {
        price: 100,
        name: "Chanel",
        url:"https://cdn.shopify.com/s/files/1/2955/8090/products/splendid-original-brand-wrist-watch-men-watch-women-full-steel-mens-watch-womens-watches-kol-saati-lovers-watches-true-colors-store-men-black-7_640x640.jpg?v=1528526290",
        quantity: 1
      },
      {
        price: 150,
        name: "Chopard",
        url:"https://5.imimg.com/data5/NO/AO/MY-44191887/mens-replica-rado-watches-india-500x500.jpg",
        quantity: 1
      },
      {
        price: 115,
        name: "Patek Phillipe",
        url:"https://i.pinimg.com/originals/c6/b6/1d/c6b61d8fcf6d199de7149466824d79bb.jpg",
        quantity: 1
      },
      {
        price: 110,
        name: "Hermes",
        url:"https://cdn.shopify.com/s/files/1/1335/3559/products/2016-Hour-Leisure-Clock-Letters-Number-Print-Watches-Women-Ladies-Watch-Quartz-Wristwatches-Relogio-Feminino-Saat_5c3e221f-a1c6-40a2-9910-5e1f1ad3d41a_2048x2048.jpg?v=1489816452",
        quantity: 1
      },{
        price: 115,
        name: "CK",
        url:"https://cdn.shopify.com/s/files/1/1802/1261/products/Stylish-Turntable-Creative-Watch-Leather-Casual-Women-Watches-Quartz-Clock-Female-Lover-Sport-Wristwatch-Relogio-Feminino_f4447249-a306-4d2d-8c9a-bcbd34b7c115_grande.jpg?v=1534046619",
        quantity: 1
      },{
        price: 100,
        name: "Balmain",
        url:"https://cdn7.bigcommerce.com/s-pkla4xn3/products/2694/images/16292/YAZOLE-2017-Fashion-Quartz-Watch-Women-Watches-Ladies-Girls-Famous-Brand-Wrist-Watch-Female-Clock-Montre__97647.1514982595.500.750.jpg?c=2",
        quantity: 1
      },
      {
        price: 152,
        name: "Mido",
        url:"https://image.dhgate.com/0x0/f2/albu/g5/M00/A7/8F/rBVaJFhhFYyAFGkCAAMhh1mdsnk710.jpg",
        quantity: 1
      },
      {
        price: 100,
        name: "Flik Flak",
        url:"https://www.dhresource.com/0x0s/f2-albu-g5-M01-7D-A1-rBVaJFgeqDWAXlrfAAJDnQwnUQQ843.jpg/luxury-fashion-hk-brand-guou-watch-women.jpg",
        quantity: 1
      }
    ];
  }

  state = {
    cart: []
  };

  addItemToCart = (item, index) => {
    let newCart = [];
    if (!this.state.cart.includes(item)) {
      newCart.push(item);
    } else {
      this.state.cart.map(cartItem => {
        if (cartItem === item) {
          cartItem.quantity += 1;
        }
      });
    }
    this.setState(state => ({
      cart: state.cart.concat(newCart)
    }));
  };

  removeItemFromCart = index => {
    const newCart = [...this.state.cart];
    newCart[index].quantity = 1;
    newCart.splice(index, 1);
    this.setState(state => ({
      cart: newCart
    }));
  };

  increaseQuantity = index => {
    const newCart = [...this.state.cart];
    newCart[index].quantity += 1;
    this.setState(state => ({
      cart: newCart
    }));
  };

  decreaseQuantity = index => {
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
              products={this.products}
              cart={this.state.cart}
              addItemToCart={this.addItemToCart}
            />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              cart={this.state.cart}
              removeItemFromCart={this.removeItemFromCart}
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity}
            />
          )}
        />
        <footer className="footer">Made with love by Shital Bhutiya</footer>
      </div>
    );
  }
}

export default App;
