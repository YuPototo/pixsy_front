import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhoto } from "../types";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    endpoints: (build) => ({
        getPhotos: build.query<IPhoto[], void>({
            query: () => ({ url: `photos` }),
            transformResponse: (res: { photos: IPhoto[] }) => res.photos,
        }),
    }),
});

export const { useGetPhotosQuery } = api;
