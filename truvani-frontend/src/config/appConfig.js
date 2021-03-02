const config = {
  apiUrl: "https://localhost:2828",
  productList: "/products",
  productRecommendation: "/recommends",
};

const { apiUrl, productList, productRecommendation };

const productListUrl = apiUrl + productList;
const recommendsUrl = apiUrl + productRecommendation;

export { productListUrl, recommendsUrl };
