import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import statusReducer from "./statusReducer";
// import productSlice from './productReducers';

// const persistConfig = {
//     key: "status",
//     storage,
//     whitelist: ["list"],
// };

const rootReducer = combineReducers({
    statusReducer,
    // branches: persistReducer(persistConfig, branchesReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
                ignoredActionPaths: ["payload"],
            },
        }),
});
export const persistor = persistStore(store);
