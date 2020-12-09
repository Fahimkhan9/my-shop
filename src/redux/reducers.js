const { GET_PRODUCT_BY_CATEGORY } = require("./actionTypes");

const shopstate = {
  productdata: [
    {
      example: "example",
    },
  ],
};

const productReducer = (state = shopstate, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_CATEGORY: {
      return null;
    }

    default:
      break;
  }
};

export { productReducer };
