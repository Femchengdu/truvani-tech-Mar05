import React from "react";
import { connect } from "react-redux";
import ShippingComponent from "./ShippingComponent";

const CartSummary = ({ cartItems, rewards }) => {
  const cartItemsPriceSum = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const taxPrice = cartItemsPriceSum * 0.1;
  const shippingCost =
    rewards === "Free Shipping and Totebag"
      ? 0
      : rewards === "Free Shipping"
      ? 0
      : 1.99;
  const totalPrice = cartItemsPriceSum + shippingCost + taxPrice;
  return (
    <div>
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-xs-8">Cart Items Price</div>
            <div className="col-xs-4 text-right">
              ${cartItemsPriceSum.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-8">Tax Price</div>
            <div className="col-xs-4 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <ShippingComponent />
            </div>
            <div className="col-xs-4 text-right">
              ${shippingCost.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <strong>Total Price</strong>
            </div>
            <div className="col-xs-4 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ cartItems, rewards }) => ({
  cartItems,
  rewards,
});

export default connect(mapStateToProps)(CartSummary);
