import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://assaginment07-server.vercel.app/api/v1",
        credentials: "include",
    }),
    tagTypes: [
        "subscription",
        "donation",
        "donor",
        "comment",
        "volunteer",
        "testiomial",
    ],
    endpoints: () => ({})
}) 