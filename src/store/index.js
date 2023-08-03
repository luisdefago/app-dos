import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import cartReducer from './cart/cartSlice';
import { categoriesApi } from './categories/api';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import { productsApi } from './products/api';
import { ordersApi } from './orders/api';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            productsApi.middleware,
            ordersApi.middleware
        ),
});

setupListeners(store.dispatch);
