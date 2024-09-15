import { configureStore } from '@reduxjs/toolkit';
import userSlice from './redux/dataSlice'
import filteredDataSlice from "./redux/filteredDataSlice";

const store = configureStore({
    reducer: {
        data: userSlice,
        filteredUsers: filteredDataSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;