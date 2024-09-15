import {createSlice} from "@reduxjs/toolkit";
import {UserData} from "../components/Table";

interface UserState {
    filteredUsers: UserData[];
}

const initialState : UserState = {
    filteredUsers: []
}

const filteredUsersSlice = createSlice({
    name: 'filteredUsers',
    initialState,
    reducers: {
        setFilteredUsers: (state, action) => {
            state.filteredUsers = action.payload
        }
    }
})

export const { setFilteredUsers } = filteredUsersSlice.actions;
export default filteredUsersSlice.reducer;