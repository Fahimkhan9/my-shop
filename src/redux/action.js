const { SET_PRODUCT_DATA, ADD_TO_CART } = require("./actionTypes");

const setProductData = (data) => {
  return {
    type: SET_PRODUCT_DATA,
    payload: data,
  };
};
const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export { setProductData, addToCart };
