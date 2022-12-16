import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import photoListRuducer from "./photoListSlice";
import { api } from "./api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        photoList: photoListRuducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
