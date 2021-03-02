import React from "react";
const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-md-12">
          <div className="well">
            <div className="row">
              <div className="col-md-8">
                <h2>Truvani Recommendations</h2>
              </div>
              <div className="col-md-4 ">
                <h2 className="text-right">Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
