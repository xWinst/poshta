import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";

export type Branch = {
    id: string;
    name: string;
    adress: string;
    phone: string;
    maxWeight: number;
    maxDimensions: string;
    longitude: string;
    latitude: string;
    hasPostFinance: boolean;
    hasBicycleParking: boolean;
    hasPOSTerminal: boolean;
    hasInternational: boolean;
    hasSelfWorkplaces: boolean;
    canGetMoneyTransfer: boolean;
    hasGeneratorEnabled: boolean;
    schedule: object;
    receptionSchedule: object;
    deliverySchedule: object;
};

export const getBranches = createAsyncThunk<
    Branch[],
    string,
    { rejectValue: string }
>("getLastArticles", async (city, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("", {
            apiKey: "8e904f55406e03101da547dfe0c30720",
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: { CityName: city },
        });

        const result = data.data.map((branch: any) => {
            const { Width, Height, Length } =
                branch.SendingLimitationsOnDimensions;
            return {
                id: branch.Ref,
                name: branch.Description,
                adress: branch.ShortAddress,
                phone: branch.Phone,
                maxWeight: branch.PlaceMaxWeightAllowed,
                maxDimensions: `${Width} x ${Height} x ${Length}`,
                longitude: branch.Longitude,
                latitude: branch.Latitude,
                hasPostFinance: branch.PostFinance === "1",
                hasBicycleParking: branch.BicycleParking === "1",
                hasPOSTerminal: branch.POSTerminal === "1",
                hasInternational: branch.InternationalShipping === "1",
                hasSelfWorkplaces: branch.SelfServiceWorkplacesCount === "1",
                canGetMoneyTransfer: branch.CanGetMoneyTransfer === "1",
                hasGeneratorEnabled: branch.GeneratorEnabled === "1",
                schedule:branch.Schedule,
                receptionSchedule: branch.Reception,
                deliverySchedule: branch.Delivery
            };
        });

       
        return result;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});
