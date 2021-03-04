const express = require("express");
const cors = require("cors");
const {
  recommendByProductByLikes,
  recommendByProductProperties,
} = require("./recommender/recommender");

const { products } = require("./data/dummyData");
const port = process.env.PORT || 2888;

const app = new express();
app.use(cors());

app.get("/test_server", (req, res) => {
  res.send(
    JSON.stringify({
      truvani: "Server",
      is: `ready to serve on port ${port}`,
    })
  );
});

app.get("/products", (req, res) => {
  res.send(
    JSON.stringify({
      products,
    })
  );
});

app.get("/recommends", (req, res) => {
  try {
    const { q } = req.query;
    console.log("The query is :", q);
    res.send(
      JSON.stringify({
        title: q,
        id: 999,
      })
    );
  } catch (error) {
    console.log("Recommender search error :", error);
    res.sendStatus(200);
  }
});

app.listen(port, () => {
  console.log(`{^_^}/ server started at localhost:${port}`);
});
