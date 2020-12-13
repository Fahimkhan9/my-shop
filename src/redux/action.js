const {
  SET_PRODUCT_DATA,
  ADD_TO_CART,
  CHANGE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} = require("./actionTypes");

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
const changeProductQuantity = (changetype, id) => {
  return {
    type: CHANGE_PRODUCT_QUANTITY,
    changetype,
    id,
  };
};
const removeProductFromCart = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    id,
  };
};
export {
  setProductData,
  addToCart,
  changeProductQuantity,
  removeProductFromCart,
};
