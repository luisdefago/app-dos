import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import cartReducer from './cart/cartSlice';
import { categoriesApi } from './categories/api';
import categoriesReducer from './categories/categoriesSlice';
import authReducer from './auth/authSlice';
import productsReducer from './products/productsSlice';
import { productsApi } from './products/api';
import { ordersApi } from './orders/api';
import { authApi } from './auth/api';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        auth: authReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            productsApi.middleware,
            ordersApi.middleware,
            authApi.middleware
        ),
});

setupListeners(store.dispatch);
