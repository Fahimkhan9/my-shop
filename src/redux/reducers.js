import { setProductData } from "./action";

const { GET_PRODUCT_BY_CATEGORY, SET_PRODUCT_DATA } = require("./actionTypes");

const shopstate = {
  productdata: [],
};

const productReducer = (state = shopstate, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_CATEGORY: {
      return {
        ...state,
        productdata: [state.productdata, { example: "example" }],
      };
    }
    case SET_PRODUCT_DATA: {
      return {
        ...state,
        productdata: action.payload,
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
