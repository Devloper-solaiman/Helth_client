import { baseApi } from "@/redux/api/baseApi";

const subscriptionApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        postSubscription: builder.mutation({
            query: (data) => ({
                url: "/subscription",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["subscription"],
        }),

        getAllSubscription: builder.query({
            query: () => {
                return {
                    url: "/subscription",
                    method: "GET",
                };
            },
            providesTags: ["subscription"],
        }),

        getSingleSubscription: builder.query({
            query: (id) => {
                return {
                    url: `/subscription/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["subscription"],
        }),

        deleteSubscription: builder.mutation({
            query: (id) => {
                return {
                    url: `/subscription/${id}`,
                    method: "DELETE",
                    credentials: "include",
                };
            },
            invalidatesTags: ["subscription"],
        }),
    }),
});

export const {
    usePostSubscriptionMutation,
    useGetAllSubscriptionQuery,
    useDeleteSubscriptionMutation,
    useGetSingleSubscriptionQuery,
} = subscriptionApi