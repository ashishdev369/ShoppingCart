const Cart = [];

const handleCart = (state = Cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      // Check if product is already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity
         state.map((x) => {
            return x.id === product.id ? { ...x, qty: x.qty + 1 } : x;
        });
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELETE_ITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
         state.map((x) => {
            return x.id === product.id ? { ...x, qty: x.qty - 1 } : x;
        });
      }
      break;

    default:
        return state;
      break;
  }
};

export default handleCart;
