import React from "react";
import ItemDetail from "./ItemDetail";

const ItemList = ({ list }) => {
  return (
    <div className="container">
      {list.map((item, index) => (
        <ItemDetail key={item.Handle} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
