import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBranches, Branch } from "./branchesOperation";

type BranchesState = {
    list: Branch[];
};

const initialState: BranchesState = {
    list: [],
};

const branchesSlice = createSlice({
    name: "branches",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getBranches.fulfilled,
            (state, action: PayloadAction<Branch[]>) => {
                state.list = action.payload;
            }
        );
    },
});

export default branchesSlice.reducer;
