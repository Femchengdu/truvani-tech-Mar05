import React from "react";
import AddToCart from "../appButtons/AddToCart";
const ItemDetail = ({ item }) => {
  return (
    <div className="col-xs-4">
      <div className="well">
        <div className="card">
          <img
            className="img-responsive"
            src={item.imageSrc}
            alt={item.title}
          />
          <div className="card-body">
            <h3 className="card-title"> {item.title}</h3>
            <p class="card-text">${item.price}</p>
            <AddToCart title="Add To Cart" item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
