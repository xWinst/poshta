import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWarehouses, Branch } from "./branchesOperation";

type BranchesState = {
    list: Branch[];
    filter: boolean[];
};

const initialState: BranchesState = {
    list: [],
    filter: [true, false, false],
};

const branchesSlice = createSlice({
    name: "branches",
    initialState,
    reducers: {
        changeFilter: (state, action: PayloadAction<number>) => {
            state.filter[action.payload] = !state.filter[action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getWarehouses.fulfilled,
            (state, action: PayloadAction<Branch[]>) => {
                state.list = action.payload;
            }
        );
    },
});

export const { changeFilter } = branchesSlice.actions;

export default branchesSlice.reducer;
