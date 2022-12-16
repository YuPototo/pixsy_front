import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import photoListRuducer from "../features/photoList/photoListSlice";

export const store = configureStore({
    reducer: {
        photoList: photoListRuducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
