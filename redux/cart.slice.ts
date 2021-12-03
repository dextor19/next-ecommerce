import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface Product {
    id: number;
    product: string;
    category: string;
    image: string;
    price: number;
    size: string;
}

interface CartProduct extends Product {
    quantity: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartProduct[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
        const productIndex = state.findIndex(product => product.id === action.payload.id);
        if (productIndex !== -1) {
            state[productIndex].quantity++;
        } else {
            state.push({...action.payload, quantity: 1, size: action.payload.size})
        }
    },
    incrementQuantity: (state, action: PayloadAction<Product>) => {
        const productIndex = state.findIndex( product => product.id === action.payload.id);
            state[productIndex].quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<Product>) => {
        const productIndex = state.findIndex(product => product.id === action.payload.id);
        if (state[productIndex].quantity === 1) {
          state.splice(productIndex, 1);
        } else {
            state[productIndex].quantity--;
        }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.findIndex( product => product.id === action.payload.id);
      state.splice(productIndex, 1);
    },
  },
});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = cartSlice.actions;
  
export const getCartSelector = (state: RootState) => state;

export default cartSlice.reducer;