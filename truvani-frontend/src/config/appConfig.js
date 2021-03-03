const config = {
  apiUrl: "http://localhost:2888",
  productList: "/products",
  productRecommendation: "/recommends",
};

const { productList, productRecommendation, apiUrl } = config;

const productListUrl = apiUrl + productList;
const recommendsUrl = productRecommendation;

export { productListUrl, recommendsUrl };
