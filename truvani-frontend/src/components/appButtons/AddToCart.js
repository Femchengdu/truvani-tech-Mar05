import React from "react";

const AddToCart = ({ title }) => {
  return (
    <div>
      <button className="btn btn-block btn-primary">{title}</button>
    </div>
  );
};

export default AddToCart;
