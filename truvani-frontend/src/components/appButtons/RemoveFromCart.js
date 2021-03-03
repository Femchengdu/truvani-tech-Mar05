import React from "react";

const RemoveFromCart = ({ operation }) => {
  return (
    <div>
      <button className="btn btn-block btn-danger">{operation}</button>
    </div>
  );
};

export default RemoveFromCart;
