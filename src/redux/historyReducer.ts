import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HistoryState = {
    list: string[];
};

const initialState: HistoryState = {
    list: [],
};

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addTTN: (state, action: PayloadAction<string>) => {
            state.list.push(action.payload);
        },
        removeTTN: (state, action: PayloadAction<string>) => {
            state.list.filter((ttn) => ttn !== action.payload);
        },

        removeAll: (state) => initialState,
    },
});

export const { addTTN, removeTTN, removeAll } = historySlice.actions;

export default historySlice.reducer;
