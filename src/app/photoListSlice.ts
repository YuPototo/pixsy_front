import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PhotoListState {
    topic?: string;
    searchTerm?: string;
}

const initialState: PhotoListState = {};

export const photoListSlice = createSlice({
    name: "photos",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        searchTermEntered: (state, { payload }: PayloadAction<string>) => {
            state.searchTerm = payload;
        },
        topicSelected: (state, { payload }: PayloadAction<string>) => {
            if (state.topic === payload) {
                state.topic = undefined;
            } else {
                state.topic = payload;
            }
        },
    },
});

export const { searchTermEntered, topicSelected } = photoListSlice.actions;

export default photoListSlice.reducer;
