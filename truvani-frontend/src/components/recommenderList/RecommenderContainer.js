import React from "react";
import { connect } from "react-redux";
import RecommenderList from "./RecommenderList";
const RecommenderContainer = ({ cartItems, recommenderItems }) => {
  return cartItems.length > 0 && recommenderItems.length > 0 ? (
    <RecommenderList />
  ) : null;
};

const mapStateToProps = ({ cartItems, recommenderItems }) => ({
  cartItems,
  recommenderItems,
});

export default connect(mapStateToProps)(RecommenderContainer);
