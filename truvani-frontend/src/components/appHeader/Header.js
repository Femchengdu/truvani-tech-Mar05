import React from "react";
import CartBadge from "../appButtons/CartBadge";
const Header = () => {
  return (
    <header>
      <div className="well">
        <div className="row">
          <div className="col-md-8">
            <h2 className="reset">Truvani Recommendations</h2>
          </div>
          <div className="col-md-4">
            <CartBadge />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
