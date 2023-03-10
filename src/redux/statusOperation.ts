import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";

export type Status = {
    isLoading: boolean;
    status: string;
    receivedDate: string;
    deliveryDate: string;
    recipientCity: string;
    senderCity: string;
    dispatchDate: string;
    isParcelDelivered: boolean;
    senderBranch: string;
    recipientBranch: string;
    error: string | undefined;
};

export const getStatus = createAsyncThunk<
    Status,
    string,
    { rejectValue: string }
>("getStatus", async (number, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("", {
            apiKey: "8e904f55406e03101da547dfe0c30720",
            modelName: "TrackingDocument",
            calledMethod: "getStatusDocuments",
            methodProperties: {
                Documents: [{ DocumentNumber: number }],
            },
        });

        if (data.data[0].StatusCode === "3")
            return rejectWithValue(`ТТН за номером ${number} не знайдено`);

        const {
            Status,
            RecipientDateTime,
            ScheduledDeliveryDate,
            CityRecipient,
            CitySender,
            DateCreated,
            ActualDeliveryDate,
            WarehouseSender,
            WarehouseRecipient,
        } = data.data[0];

        const result = {
            isLoading: false,
            status: Status,
            receivedDate: RecipientDateTime,
            deliveryDate: ScheduledDeliveryDate,
            recipientCity: CityRecipient,
            senderCity: CitySender,
            dispatchDate: DateCreated,
            isParcelDelivered: !!ActualDeliveryDate,
            senderBranch: WarehouseSender,
            recipientBranch: WarehouseRecipient,
            error: "",
        };

        return result;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});
