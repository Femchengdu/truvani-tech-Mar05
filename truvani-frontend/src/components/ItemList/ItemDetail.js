import React from "react";
import AddToCart from "../appButtons/AddToCart";
const ItemDetail = ({ item }) => {
  return (
    <div className="col-xs-4">
      <div className="well">
        <img className="img-responsive" src={item.imageSrc} alt={item.title} />
        <h3> {item.title}</h3>
        <div>${item.price}</div>
        <AddToCart title="Add To Cart" />
      </div>
    </div>
  );
};

export default ItemDetail;
