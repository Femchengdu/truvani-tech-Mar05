import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/actions/cartActions";
const RemoveFromCart = ({ title, removeItemFromCart, item }) => {
  return (
    <div>
      <button
        onClick={() => removeItemFromCart(item)}
        className="btn btn-danger"
      >
        {title}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(RemoveFromCart);
