import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../Redux/authSlice';
import darkModeSlice from '../Redux/darkModeSlice';
import incomeSlice from '../Redux/incomeSlice';

const store = configureStore({
    reducer: {
        user: authSlice,
        darkMode: darkModeSlice,
        income: incomeSlice
    }
});

export default store;