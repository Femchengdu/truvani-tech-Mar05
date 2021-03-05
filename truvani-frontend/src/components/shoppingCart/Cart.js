import React from "react";
import { connect } from "react-redux";
import Checkout from "../appButtons/Checkout";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
const Cart = ({ cartItems }) => {
  return (
    <aside>
      <h3>Cart Items</h3>
      <div>{cartItems.length === 0 && <div>Cart Is Empty!</div>}</div>
      <ul className="list-group">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <CartSummary />
      <Checkout />
    </aside>
  );
};

const mapStateToProps = ({ cartItems }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Cart);
