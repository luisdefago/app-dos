import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import cartReducer from './cart/cartSlice';
import { categoriesApi } from './categories/api';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware),
});

setupListeners(store.dispatch);
