import React from "react";

const CartInfo = ({ cartItems }) => {
  return (
    <div>
      <button className="btn btn-info">{cartItems}</button>
    </div>
  );
};

export default CartInfo;
