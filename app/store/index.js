import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/auth/authSlice';

export const makeStore=()=>{
    return configureStore({
        reducer:{
            user:userReducer
        }
    })
}