import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    msg: string;
    user: string;
    token: Object;
    loading: boolean;
    error: string;
}

interface signUpAPIResponse {
    token: {
        refresh: string;
        access: string;
    },
    msg: string;
}

const initialState: AuthState = {
    msg: "",
    user: '',
    token: '',
    loading: false,
    error: ''
}

export const registerUser: any = createAsyncThunk('registerUser', async(body) => {
    const response = await fetch('http://127.0.0.1:8000/api/user/register/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    });
    const data: signUpAPIResponse = await response.json();
    return data;
})

export const loginUser: any = createAsyncThunk('loginUser', async(body) => {
    const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    });
    const data: signUpAPIResponse = await response.json();
    return data;
})

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addToken: (state, action) => {
            const tokenValue = localStorage.getItem('token');
            state.token = tokenValue ? tokenValue : '';
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user')!;
        },
        logout: (state, action) => {
            state.token = {};
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            const { token, msg } = action.payload;
            state.msg = msg;
            state.token = token?.access;
        })
        .addCase(registerUser.rejected, (state) => {
            state.loading = false;
            state.error = 'Registration failed';
        })
        /** Reducers for signin */
        .addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            const { token, msg } = action.payload;
            state.msg = msg;
            state.token = token?.access;
            state.user = loginUser
            localStorage.setItem('token', token.access);
            localStorage.setItem('msg', msg);
            localStorage.setItem('user', JSON.stringify(loginUser));
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
        })
    }
});

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer;