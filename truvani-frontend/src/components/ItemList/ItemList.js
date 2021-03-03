import React from "react";
import { connect } from "react-redux";
import ItemDetail from "./ItemDetail";

const ItemList = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      {products.map((item) => (
        <ItemDetail key={item.id} item={item} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.products,
  loading: state.loading,
});
export default connect(mapStateToProps)(ItemList);
