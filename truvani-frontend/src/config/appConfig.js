const config = {
  apiUrl: "http://backend:2888",
  productList: "/products",
  productRecommendation: "/recommends",
};

const { productList, productRecommendation, apiUrl } = config;

const productListUrl = apiUrl + productList;
const recommendsUrl = productRecommendation;

export { productListUrl, recommendsUrl };
