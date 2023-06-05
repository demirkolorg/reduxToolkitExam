import { createSlice } from "@reduxjs/toolkit";
import courses from "../data.js";

const initialState = {
  cartItems: courses,
  sepetKursSayisi: 0,
  sepetUrunSayisi: 0,
  sepetToplamTutar: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    sepetiTemizle: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((s) => s.id !== action.payload);
    },
    inputItem: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      item.quantity = action.payload.value;
    },
    eksiItem: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter((s) => s.id !== item.id);
      } else {
        item.quantity -= 1;
      }
    },
    artiItem: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      item.quantity += 1;
    },
    toplamTutar: (state) => {
      let total = 0;
      let sepetAyriAdet = 0;
      let kurs = 0;

      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
        sepetAyriAdet += item.quantity;
        kurs += 1;
      });

      state.sepetToplamTutar = total;
      state.sepetUrunSayisi = sepetAyriAdet;
      state.sepetKursSayisi = kurs;
    },
  },
});

export const {
  sepetiTemizle,
  removeItem,
  eksiItem,
  artiItem,
  inputItem,
  toplamTutar,
} = cartSlice.actions;
export default cartSlice.reducer;
