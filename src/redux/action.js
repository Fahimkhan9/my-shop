const { GET_PRODUCT_BY_CATEGORY } = require("./actionTypes");

const getProductByCategory = (category) => {
  return {
    type: GET_PRODUCT_BY_CATEGORY,
    category,
  };
};
export { getProductByCategory };
