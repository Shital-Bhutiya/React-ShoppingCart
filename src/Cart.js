import React, { Component } from "react";
import { Link } from "react-router-dom";
import Delete from "@material-ui/icons/Delete";
import Home from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
class Cart extends Component {
  
  render() {
    return (
      <div>
        <div className="menu">
          <Link to="/">
            <Home style={{ fontSize: "55px" }} />
          </Link>
        </div>
        {this.props.cart.length === 0 && <h1>Your cart is empty</h1>}

        {this.props.cart.length > 0 && (
          <table border="1px solid black">
            <tbody>
              {this.props.cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.url} alt={item.name}/>
                  </td>
                  <td>
                    <button className='add' onClick={()=>this.props.decreaseQuantity(index)}>
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button className='reduce' onClick={()=>this.props.increaseQuantity(index)}>
                       +
                    </button>
                </td>

                  <td>{item.price}</td>
                  <td>
                    <IconButton
                      color="primary"
                      aria-label="Add to shopping cart"
                    >
                      <Delete
                        onClick={() =>
                          this.props.removeItemFromCart(item, index)
                        }
                      />
                    </IconButton>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" style={{ textAlign: "right" }}>
                  Total: ${" "}
                  {this.props.cart.reduce((acc, curr) => {
                    return acc + curr.price * curr.quantity;
                  }, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default Cart;
