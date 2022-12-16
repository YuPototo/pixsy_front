import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhoto } from "../types";

interface GetPhotosArg {
    page?: number;
    limit?: number;
    searchTerm?: string;
    topic?: string;
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    endpoints: (build) => ({
        getPhotos: build.query<IPhoto[], GetPhotosArg>({
            query: ({ page = 1, limit = 10, searchTerm, topic }) => {
                let url = `photos?page=${page}&limit=${limit}`;
                if (searchTerm) url += `&searchTerm=${searchTerm}`;
                if (topic) url += `&topic=${topic}`;
                return {
                    url,
                };
            },
            transformResponse: (res: { photos: IPhoto[] }) => res.photos,
        }),
        getTopics: build.query<string[], void>({
            query: () => "topics",
            transformResponse: (res: { topics: string[] }) => res.topics,
        }),
    }),
});

export const { useGetPhotosQuery, useGetTopicsQuery } = api;
