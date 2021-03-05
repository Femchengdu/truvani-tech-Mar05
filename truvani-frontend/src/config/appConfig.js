const config = {
  apiUrl: "http://localhost:2888",
  productList: "/products",
  productRecommendation: "/recommends",
  localStorageCartKey: "truvaniCart",
};

const {
  productList,
  productRecommendation,
  apiUrl,
  localStorageCartKey,
} = config;

const productListUrl = apiUrl + productList;
const recommendsUrl = apiUrl + productRecommendation;

export { productListUrl, recommendsUrl, localStorageCartKey };
