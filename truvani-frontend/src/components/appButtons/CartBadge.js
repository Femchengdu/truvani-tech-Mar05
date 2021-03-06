import React from "react";
import { connect } from "react-redux";

const CartBadge = ({ cartItems }) => {
  const cartItemsAvailable = cartItems.length !== 0;
  return (
    <>
      {cartItemsAvailable && (
        <button className="btn btn-info">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          &nbsp;
          <span className="badge badge-light">{cartItems.length}</span>
        </button>
      )}
    </>
  );
};

const mapStateToProps = ({ cartItems }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartBadge);
