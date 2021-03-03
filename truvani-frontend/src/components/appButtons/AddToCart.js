import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";
const AddToCart = ({ title, addItemToCart, item, isCart }) => {
  return (
    <div>
      <button
        onClick={() => addItemToCart(item)}
        className={isCart ? "btn btn-primary" : "btn btn-block btn-primary"}
      >
        {title}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(AddToCart);
