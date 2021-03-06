import React from "react";
import { connect } from "react-redux";

const Checkout = ({ cartItems }) => {
  const cartItemsAvailable = cartItems.length !== 0;
  return (
    <>
      <hr />
      {cartItemsAvailable && (
        <button className="btn btn-info btn-block">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          &nbsp; Checkout
        </button>
      )}
    </>
  );
};

const mapStateToProps = ({ cartItems }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Checkout);
