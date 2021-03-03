const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/poducts",
    createProxyMiddleware({
      target: "http://backend:2888",
      changeOrigin: true,
    })
  );
};
