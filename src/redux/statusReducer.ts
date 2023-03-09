import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStatus } from "./statusOperation";

// type StatusState = {
//     status: string;
//     senderAddress: string;
//     recipientAddress: string;
// };

// interface StatusAction {
//     type: string;
//     payload: {
//       status: string;
//       senderAddress: string;
//       recipientAddress: string;
//     };
//   }

const initialState = {
    status: "",
    senderAddress: "",
    recipientAddress: "",
};

const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        // setStatus: (state, action) => {
        //     state = { ...action.payload };
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getStatus.pending, (state, action: PayloadAction) => {
            if (typeof action.payload === "object" && action.payload !== null) {
                const { status, senderAddress, recipientAddress } =
                    action.payload;
                state.status = status;
                state.senderAddress = senderAddress;
                state.recipientAddress = recipientAddress;
            }
        });
    },
});

// export const { setStatus } = statusSlice.actions;

export default statusSlice.reducer;

// extraReducers: (builder) => {
//     builder.addCase(
//         getStatus.pending,
//         (
//             state,
//             action: PayloadAction<
//                 undefined,
//                 string,
//                 {
//                     arg: undefined;
//                     requestId: string;
//                     requestStatus: "pending";
//                 },
//                 never
//             >
//         ) => {
//             if (
//                 typeof action.payload === "object" &&
//                 action.payload !== null
//             ) {
//                 const { status, senderAddress, recipientAddress } =
//                     action.payload;
//                 state.status = status;
//                 state.senderAddress = senderAddress;
//                 state.recipientAddress = recipientAddress;
//             }
//         }
//     );
// },
