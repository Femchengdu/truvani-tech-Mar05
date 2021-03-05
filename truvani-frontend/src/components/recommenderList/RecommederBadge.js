import React from "react";

const RecommenderBadge = () => {
  return (
    <button className="btn btn-info badgeOverlay">
      <i className="fa fa-certificate" aria-hidden="true"></i>
      &nbsp;
      <span className="">Recommeded Item</span>
    </button>
  );
};
export default RecommenderBadge;
