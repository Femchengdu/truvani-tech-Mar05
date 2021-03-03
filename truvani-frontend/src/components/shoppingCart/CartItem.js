import React from "react";
import AddToCart from "../appButtons/AddToCart";
import RemoveFromCart from "../appButtons/RemoveFromCart";

const CartItem = ({ item }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-xs-4">{item.title}</div>
        <div className="col-xs-4">
          <div class="row">
            <div className="col-xs-4">
              {" "}
              <AddToCart isCart title="+" item={item} />
            </div>
            <div className="col-xs-4">
              {" "}
              <RemoveFromCart title="-" item={item} />
            </div>
          </div>
        </div>
        <div className="col-xs-4">
          {item.qty} * ${item.price.toFixed(2)}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
