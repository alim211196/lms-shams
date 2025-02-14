import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/apiClient';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post('/auth/login', credentials);
        const { user, token } = response.data;
  
        localStorage.setItem('token', token);
        return { user, token };
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
      }
    }
  );