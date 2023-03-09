import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    status: "",
    senderAddress: "",
    recipientAddress: "",
};

const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state = { ...action.payload };
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getLastArticles.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    // },
});

export const { setStatus } = statusSlice.actions;

export default statusSlice.reducer;
