import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

//configure the redux store with the card reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, //adding the cart reducer to store
  },
});

export default store;
