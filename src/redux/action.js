const { GET_PRODUCT_BY_CATEGORY, SET_PRODUCT_DATA } = require("./actionTypes");

const getProductByCategory = (category) => {
  return {
    type: GET_PRODUCT_BY_CATEGORY,
    category,
  };
};

const setProductData = (data) => {
  return {
    type: SET_PRODUCT_DATA,
    payload: data,
  };
};

export { getProductByCategory, setProductData };
