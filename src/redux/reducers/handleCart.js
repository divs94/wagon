const cart = [];

const handleCart = (state = cart, action) => {
  const products = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // checks if products is added
      const exist = state.find((x) => x.id === products.id);
      if (exist) {
        // add item to cart
        return state.map((x) =>
          x.id === products.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const products = action.payload;
        return [
          ...state,
          {
            ...products,
            qty: +1,
          },
        ];
      }
      break;
    case "DELITEM":
      // to delete item from cart
      const exist1 = state.find((x) => x.id === products.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      }else{
        return state.map((x)=> x.id === products.id ? {...x, qty: x.qty - 1}: x);
      }
break;
    default:
       return state;
      break;
  }
};

export default handleCart;
