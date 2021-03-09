import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";
import { fetchRecommendations } from "../../redux/actions/recommendActions";
const AddToCart = ({
  title,
  addItemToCart,
  item,
  isCart,
  fetchRecommendations,
}) => {
  return (
    <div>
      <button
        onClick={() => {
          addItemToCart(item);
          fetchRecommendations(item.id);
        }}
        className={isCart ? "btn btn-primary" : "btn btn-block btn-primary"}
      >
        {title}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  fetchRecommendations: (itemName) => dispatch(fetchRecommendations(itemName)),
});

export default connect(null, mapDispatchToProps)(AddToCart);
