import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PhotoListState {
    topic?: string;
    searchTerm?: string;
    page: number;
}

const initialState: PhotoListState = {
    page: 1,
};

export const photoListSlice = createSlice({
    name: "photos",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        searchTermEntered: (state, { payload }: PayloadAction<string>) => {
            state.searchTerm = payload;
            state.page = 1;
        },
        topicSelected: (state, { payload }: PayloadAction<string>) => {
            if (state.topic === payload) {
                state.topic = undefined;
                state.page = 1;
            } else {
                state.topic = payload;
                state.page = 1;
            }
        },
        toNextPage: (state) => {
            state.page += 1;
        },
        toPrevPage: (state) => {
            state.page -= 1;
        },
    },
});

export const { searchTermEntered, topicSelected, toNextPage, toPrevPage } =
    photoListSlice.actions;

export default photoListSlice.reducer;
