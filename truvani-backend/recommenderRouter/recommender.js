const express = require("express");
const router = express.Router();
const { products } = require("../data/dummyData");
const { recommendByProductProperty } = require("./utils/recommenderUtilFns");

const returnRecommendedProducts = (req, res) => {
  try {
    const { q } = req.query;

    const responseCb = (recommends) => {
      res.send(
        JSON.stringify({
          recommends,
        })
      );
    };

    const queryPid = q;
    // Here I want to refer to use ger to process the data received
    console.log("I have id :", q, typeof q);
    recommendByProductProperty(
      queryPid,
      products,
      "products",
      queryPid,
      responseCb
    );
  } catch (error) {
    console.log("Recommender search error :", error);
    res.sendStatus(200);
  }
};

router.get("/", returnRecommendedProducts);

module.exports = router;
