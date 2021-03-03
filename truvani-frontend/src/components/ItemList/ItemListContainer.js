import React, { Fragment } from "react";
import ItemList from "./ItemList";
import list from "../dummyData";

const ItemListContainer = () => {
  return (
    <main>
      <h3>Products List</h3>
      <ItemList list={list} />
    </main>
  );
};

export default ItemListContainer;
