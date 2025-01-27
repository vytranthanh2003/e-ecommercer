import { createSlice } from '@reduxjs/toolkit';

const orebiSlice = createSlice({
  name: 'THANHVY',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
} = orebiSlice.actions;

export const xoaSanPham = deleteItem; // Sửa lại để sử dụng đúng tên hành động
export const giamSoLuong = decreaseQuantity;
export const tangSoLuong = increaseQuantity;

export default orebiSlice.reducer;