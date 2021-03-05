import React from "react";
import AddToCart from "../appButtons/AddToCart";
import RecommenderBadge from "./RecommederBadge";
import useClearRecommendation from "../../hooks/useClearRecommendations";
const RecommenderDetail = ({ item }) => {
  useClearRecommendation();
  return (
    <div className="col-xs-4">
      <div className="well">
        <div className="card">
          <div className="badgeImageContainer">
            <img
              className="img-responsive"
              src={item.imageSrc}
              alt={item.title}
            />
            {item.recommended && <RecommenderBadge />}
          </div>

          <div className="card-body">
            <h3 className="card-title"> {item.title}</h3>
            <p className="card-text">${item.price}</p>
            <AddToCart title="Add To Cart" item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommenderDetail;
