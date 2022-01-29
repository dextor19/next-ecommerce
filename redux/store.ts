import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import cartReducer from './cart.slice';
import favouriteReducer from './favourite.slice';

export const store = configureStore({
  reducer : {
    cartReducer,
    favouriteReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {cart: cartReducer}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;