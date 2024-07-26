import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";


const Store = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
    }
});

export default Store;
