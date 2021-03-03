const express = require("express");
const cors = require("cors");
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

app.listen(port, () => {
  console.log(`{^_^}/ server started at localhost:${port}`);
});
