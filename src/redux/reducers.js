import { setProductData } from "./action";

const {
  SET_PRODUCT_DATA,
  ADD_TO_CART,
  CHANGE_PRODUCT_QUANTITY,
  INCREMENT,
  DECREMENT,
  REMOVE_PRODUCT_FROM_CART,
} = require("./actionTypes");

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
      const sameproduct = state.cart.find(
        (pd) => pd._id === action.payload._id
      );
      let count = 1;
      let newCart;
      if (sameproduct) {
        count = parseInt(sameproduct.quantity) + parseInt(1);
        sameproduct.quantity = count;
        const others = state.cart.filter((pd) => pd._id !== action.payload._id);
        newCart = [...others, sameproduct];
        // console.log(sameproduct);
        console.log("wait", sameproduct.quantity);
      } else {
        console.log("add");
        action.payload.quantity = 1;
        newCart = [...state.cart, action.payload];
      }
      // console.log(newCart);

      return {
        ...state,

        cart: newCart,
      };
    }
    case CHANGE_PRODUCT_QUANTITY: {
      const findProduct = state.cart.find((pd) => pd._id === action.id);
      if (action.changetype === INCREMENT) {
        findProduct.quantity = findProduct.quantity + 1;
      }
      if (action.changetype === DECREMENT) {
        if (findProduct.quantity > 1) {
          findProduct.quantity = findProduct.quantity - 1;
        }
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const filter = state.cart.filter((pd) => pd._id !== action.id);
      return {
        ...state,
        cart: [filter],
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
