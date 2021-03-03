import React from "react";
import ItemList from "./ItemList";
import useFetchProducts from "../../hooks/useFetchProducts";
const ItemListContainer = () => {
  useFetchProducts();
  return (
    <main>
      <h3>Products List</h3>
      <ItemList />
    </main>
  );
};

export default ItemListContainer;
