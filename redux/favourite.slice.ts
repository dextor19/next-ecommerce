import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface Favourite {
    id: number;
    product: string;
    category: string;
    image: string;
    price: number;
    inStock: boolean;
    favourite: boolean;
}

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: [] as Favourite[],
  reducers: {
    addToFavourite: (state, action: PayloadAction<Favourite>) => {
        const productIndex = state.findIndex(product => product.id === action.payload.id );
        if (productIndex !== -1 ) {
            state[productIndex].favourite = true;
        } else {
            state.push({...action.payload})
        }
    },
    removeFromFavourite: (state, action: PayloadAction<Favourite>) => {
      const productIndex = state.findIndex( product => product.id === action.payload.id );
      console.log(productIndex)
      state.splice(productIndex, 1);
    },
  },
});

export const {
    addToFavourite,
    removeFromFavourite,
  } = favouriteSlice.actions;
  
export const getFavouriteSelector = (state: RootState) => state;

export default favouriteSlice.reducer;