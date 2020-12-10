import { setProductData } from "./action";

const { SET_PRODUCT_DATA, ADD_TO_CART } = require("./actionTypes");

const shopstate = {
  productdata: [],
  cart: [],
};

const productReducer = (state = shopstate, action) => {
  switch (action.type) {
    case SET_PRODUCT_DATA: {
      return {
        ...state,
        productdata: action.payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    default:
      return state;
  }
};

const loadProductData = (category) => (dispatch) => {
  fetch(`http://localhost:5000/getproductbycategory/${category}`)
    .then((res) => res.json())
    .then((data) => dispatch(setProductData(data)));
};

export { productReducer, loadProductData };
