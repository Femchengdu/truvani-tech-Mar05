import React, { Fragment } from "react";
import ItemList from "./ItemList";
import list from "../dummyData";

const ItemListContainer = () => {
  return (
    <Fragment>
      <p>ItemListContainer</p>
      <ItemList list={list} />
    </Fragment>
  );
};

export default ItemListContainer;
