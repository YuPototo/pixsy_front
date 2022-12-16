import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface PhotoListState {
    value: number;
}

const initialState: PhotoListState = {
    value: 1,
};

export const photoListSlice = createSlice({
    name: "photos",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {},
});

export const {} = photoListSlice.actions;

export default photoListSlice.reducer;
