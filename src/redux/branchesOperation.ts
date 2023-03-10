import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
console.log("REACT_APP_BASE_URL: ", REACT_APP_BASE_URL);
console.log("REACT_APP_API_KEY: ", REACT_APP_API_KEY);

axios.defaults.baseURL = REACT_APP_BASE_URL;

export type Branch = {
    id: number;
    name: string;
};

export const getBranches = createAsyncThunk<
    Branch[],
    string,
    { rejectValue: string }
>("getLastArticles", async (number, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("", {
            apiKey: REACT_APP_API_KEY,
            modelName: "TrackingDocument",
            calledMethod: "getStatusDocuments",
            methodProperties: {
                Documents: [{ DocumentNumber: number }],
            },
        });

        console.log("data: ", data);
        return data;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});
