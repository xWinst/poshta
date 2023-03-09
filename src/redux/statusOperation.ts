import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL;

export type Article = {
    id: number;
    featured: boolean;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches: [
        {
            id: string;
            provider: string;
        }
    ];
    events: [
        {
            id: string;
            provider: string;
        }
    ];
};

export const getStatus = createAsyncThunk<
    string,
    undefined,
    { rejectValue: string }
>("getLastArticles", async (number, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("", {
            params: {
                apiKey: REACT_APP_API_KEY,
                modelName: "TrackingDocument",
                calledMethod: "getStatusDocuments",
                methodProperties: {
                    Documents: [{ DocumentNumber: `${number}` }],
                },
            },
        });
        return data;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});
