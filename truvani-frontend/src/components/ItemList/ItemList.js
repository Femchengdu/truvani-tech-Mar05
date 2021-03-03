import React from "react";
import ItemDetail from "./ItemDetail";

const ItemList = ({ list }) => {
  return (
    <div className="row">
      {list.map((item) => (
        <ItemDetail key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
