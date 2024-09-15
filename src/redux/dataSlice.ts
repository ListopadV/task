import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserData } from '../components/Table';

interface UserState {
    users: UserData[];
}

const initialState: UserState = {
    users: [],
};

export const fetchUsers = createAsyncThunk<UserData[], void>(
    'users/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const result: UserData[] = await response.json();
        return result;
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                console.error('Error fetching data:', action.error.message);
            });
    },
});

export default userSlice.reducer;
