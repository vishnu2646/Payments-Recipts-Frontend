import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getIncomes: any = createAsyncThunk('getIncomes', async (token) => {
    const incomes = await fetch('http://127.0.0.1:8000/api/user/income/list/', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'authorization': `Bearer ${token}`,
        }
    });
    return incomes.json();
})

export const createIncome: any = createAsyncThunk('createIncome', async (token, body) => {
    console.log({token, body});
    const income = await fetch('http://127.0.0.1:8000/api/user/income/create/', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });
    return income.json();
});

export const incomeSlice = createSlice({
    name: 'Form',
    initialState: {
        isLoading: false,
        data: [],
        error: ''
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getIncomes.pending, (state, action) => {
            state.isLoading = true;
            state.error = '';
        })
        .addCase(getIncomes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = ''
        })
        .addCase(getIncomes.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Something went wrong"
        })
    }
});


export default incomeSlice.reducer;