import React from "react";
import { connect } from "react-redux";

const CartSummary = ({ cartItems }) => {
  const cartItemsPriceSum = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const taxPrice = cartItemsPriceSum * 0.1;
  const shippingCost = cartItemsPriceSum > 500 ? 0 : 1.99;
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
            <div className="col-xs-8">Shipping Price</div>
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

const mapStateToProps = ({ cartItems }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartSummary);
