import React from "react";
import { connect } from "react-redux";
const ShippingComponent = ({ rewards }) => {
  let returnContent;
  rewards === "Free Shipping and Totebag"
    ? (returnContent = (
        <span>
          Free Shipping <i className="fa fa-truck" aria-hidden="true"></i> +
          Tote bag <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        </span>
      ))
    : rewards === "Free Shipping"
    ? (returnContent = (
        <span>
          Free Shipping <i className="fa fa-truck" aria-hidden="true"></i>
        </span>
      ))
    : (returnContent = <span>Shipping Fee</span>);

  return <>{returnContent}</>;
};

const mapStateToProps = ({ rewards }) => ({
  rewards,
});

export default connect(mapStateToProps)(ShippingComponent);
