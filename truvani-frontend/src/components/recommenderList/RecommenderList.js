import React from "react";
import RecommenderDetail from "./RecommenderDetail";
import { connect } from "react-redux";

const RecommenderList = ({ recommenderItems }) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="well">
          <h3>You might also like these items:</h3>
          <div className="row">
            {recommenderItems.map((item) => (
              <RecommenderDetail item={item} />
            ))}{" "}
          </div>
        </div>
      </div>
      {/* <div className="col-md-4">
        <div className="well">List</div>
      </div> */}
    </div>
  );
};

const mapStateToProps = ({ recommenderItems }) => ({
  recommenderItems,
});

export default connect(mapStateToProps)(RecommenderList);
